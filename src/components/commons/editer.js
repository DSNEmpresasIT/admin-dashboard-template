"use client"
import React from "react"

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Editer(){
    return(
        <CKEditor
            editor={ ClassicEditor }
            data="<div id=&nbsp;editor&nbsp;><p>Hello,<br/><br/> If the distribution of letters and words is random, the reader will not be distracted from making a neutral judgment on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). <br/><br/>Thank you</p></div>"
            onChange={(event, editor) => {
                const data = editor.getData();
                onChange(data);
            }}

          />
    )
}