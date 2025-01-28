import axios from "axios";
import { useEffect } from "react";

interface DicomFileProps {
    file: File
}

function DicomFile(props: DicomFileProps) {

    useEffect(() => {
        (async () => {
            const buffer = await props.file.arrayBuffer();
            axios.put('http://localhost:8000/dicom', buffer);
        })();
    }, []);

    return (
        <>
            <div>{props.file.name}</div>
        </>
    );
}

export default DicomFile;