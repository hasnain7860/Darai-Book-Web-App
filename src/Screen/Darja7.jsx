import { useState, useEffect } from "react";
import BookShowingLayout from "../Component/BookShowingLayout.jsx";
import { database } from "../Firebase/Firebase.jsx";
import { collection, getDocs } from "firebase/firestore";

const Darja7 = () => {
    const [darja7Data, setDarja7Data] = useState([]);

    async function getdata() {
        const querySnapshot = await getDocs(collection(database, "darja7"));
        querySnapshot.forEach(doc => {
            setDarja7Data(pd => [
                ...pd,
                { docId: doc.id, docData: JSON.stringify(doc.data()) }
            ]);
        });
    }

    useEffect(() => {
        getdata();
    }, []);

    return (
        <>
            {darja7Data.map((mapdata, i) => (
                <BookShowingLayout
                    key={i}
                    ImgUrl={JSON.parse(mapdata.docData).image}
                    ReadingLink={JSON.parse(mapdata.docData).ReadingUrl}
                    DownloadLink={JSON.parse(mapdata.docData).downloadURL}
                />
            ))}
        </>
    );
};

export default Darja7;
