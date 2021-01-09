import NfcManager, { NfcEvents, Ndef, NfcTech } from 'react-native-nfc-manager';


export const readTag = (onEvent) => {


    NfcManager.start()
    NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag) => {

        console.log("NFCTag", JSON.stringify(tag))
        if (onEvent)
            onEvent(tag)

        // NfcManager.unregisterTagEvent().catch(() => 0);
    })

}

export const hasNFCSupport = () => {

    return NfcManager.isSupported()
}


export const unresignterTagEvent = () => {

    NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    NfcManager.unregisterTagEvent().catch(() => 0);
    console.warn('ex', "unregistered");
}

export const registerTagEvent = async () => {
    try {
        await NfcManager.registerTagEvent();
        console.warn('ex', "registered");
    } catch (ex) {
        console.warn('ex', ex);
        NfcManager.unregisterTagEvent().catch(() => 0);
    }

}

buildPayload = (valueToWrite) => {
    return Ndef.encodeMessage([
        Ndef.textRecord(valueToWrite, ","),
    ]);
}

_cleanUp = () => {

    NfcManager.cancelTechnologyRequest().catch(() => 0);
    unresignterTagEvent()
}
const parseText = (tag) => {
    if (tag.ndefMessage) {
        return NdefParser.parseText(tag.ndefMessage[0]);
    }
    return null;
}

export const writeTag = async (data) => {


    try {
        let resp = await NfcManager.requestTechnology(NfcTech.Ndef);
        console.warn(resp);
        let ndef = await NfcManager.getNdefMessage();
        console.warn(ndef);
        let bytes = buildPayload(data);
        await NfcManager.writeNdefMessage(bytes);
        console.warn('successfully write ndef');
        // await NfcManager.setAlertMessageIOS('I got your tag!');
        _cleanUp();
    } catch (ex) {
        console.warn('ex', ex);
        _cleanUp();
    }

    // NfcManager.start().then(() => { }).then(() => NfcManager.registerTagEvent(tag => console.log(tag)))
    //     .then(() => NfcManager.requestTechnology(NfcTech.Ndef))
    //     .then(() => NfcManager.getTag())
    //     .then(tag => {
    //         console.log(JSON.stringify(tag));
    //     })
    //     .then(() => NfcManager.getNdefMessage())
    //     .then(tag => {
    //         let parsedText = parseText(tag);
    //         console.log(parsedText)
    //     })
    //     .then(() => NfcManager.writeNdefMessage(Ndef.util.stringToBytes(data)))
    //     .then(_cleanUp)
    //     .catch(err => {
    //         console.warn(err);
    //         _cleanUp();
    //     })
}