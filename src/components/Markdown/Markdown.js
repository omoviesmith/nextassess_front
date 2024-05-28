import { Editor } from '@tinymce/tinymce-react';

export default function Markdown({ value, setValue, placeholder }) {
    return (
        <Editor
            apiKey='v1oaw3yn9un79c63uodd74j2ecckl6kpejp444c7divbpm6m'
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