import React from "react";

export default function FormGet(){
    let [searchResult,setSearchResult] = React.useState('')
    const form = React.useRef()

    const onSubmitForm = (event) => {
        event.preventDefault()

        const formData = new FormData(form.current)
        let params = new URLSearchParams(formData)//.tostring()
        let URL = '/api/form-get?' + params
        fetch(URL)
        .then(response => response.json())
        .then(result => {
            let r = (
                <>
                ค้นหา {result.target} ที่ตรงกับ: {result.kw}<br/>
                พบข้อมูลทั้งหมด : {result.results} รายการ
                </>
            )
            setSearchResult(r)
        })
        .catch(err => alert(err))
    }
    return(
        <div style={{textAlign:'center',marginTop:'20px'}}>
            <form ref={form} onSubmit={onSubmitForm}>
                <label>ค้นหา:</label>&nbsp;
                <select id="target" name="target">
                    <option value="เว็บ">เว็บ</option>
                    <option value="รูปภาพ">รูปภาพ</option>
                    <option value="วิดีโอ">วิดีโอ</option>
                </select>&nbsp;
                <input type="text"id="kw"name="kw"/>&nbsp;
                <button>ตกลง</button>
            </form>
            <br/>
            <div>{searchResult}</div>
        </div>
    )
}