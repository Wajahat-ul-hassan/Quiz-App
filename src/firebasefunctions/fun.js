import firebase from "firebase"

const Senddata = () => {
    firebase.firestore()
    .collection("category").doc({})
    .add()
}