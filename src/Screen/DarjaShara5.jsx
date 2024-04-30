import { useState, useEffect } from "react";
import BookShowingLayout from "../Component/BookShowingLayout.jsx";
import { database } from "../Firebase/Firebase.jsx";
import { collection, getDocs } from "firebase/firestore";

const DarjaShara5 = () => {
    const [darja5Data, setDarja5Data] = useState([]);

    async function getdata() {
        const querySnapshot = await getDocs(collection(database, "darja05"));
        querySnapshot.forEach(doc => {
            setDarja5Data(pd => [
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
            {darja5Data.map((mapdata, i) => (
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

export default DarjaShara5;
