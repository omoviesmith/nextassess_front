import { Editor } from '@tinymce/tinymce-react';

export default function Markdown({ value, setValue, placeholder }) {
    return (
        <Editor
            apiKey='q4ctmfpax5jsjpa2wn7qc7wdvvq58jw7xwez5bizhdnp8e6x'
            onEditorChange={setValue} 
            value={value} 
            init={{
                placeholder:`${placeholder}`,
                height:300,
                plugins:[
                    'fullscreen',
                    'wordcount','table',],
                toolbar: 'undo redo | styles | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | fullscreen',
                menubar: 'file edit view insert format'
            }} 
        />
    )
}