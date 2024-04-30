import { useState, useEffect } from "react";
import BookShowingLayout from "../Component/BookShowingLayout.jsx";
import { database } from "../Firebase/Firebase.jsx";
import { collection, getDocs } from "firebase/firestore";

const DarjaShara2 = () => {
    const [darja2Data, setDarja2Data] = useState([]);

    async function getdata() {
        const querySnapshot = await getDocs(collection(database, "darja02"));
        querySnapshot.forEach(doc => {
            setDarja2Data(pd => [
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
            {darja2Data.map((mapdata, i) => (
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

export default DarjaShara2;
