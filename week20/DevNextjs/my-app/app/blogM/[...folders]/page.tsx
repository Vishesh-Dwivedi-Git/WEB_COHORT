import { json } from "stream/consumers";

interface Params {
    folders: string[];
}

export default function Innerpage({ params }: { params: Params }) {

    return (
        <div>{JSON.stringify(params.folders)}</div>
    )
}