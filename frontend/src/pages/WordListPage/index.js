import React from 'react';
import { useParams } from "react-router-dom";

function WordListPage() {
    let { wordListId } = useParams();
    return <h1>word list ID: {wordListId}</h1>;
}


export default WordListPage