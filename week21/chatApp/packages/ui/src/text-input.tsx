interface PropType {
     onChange:any,
     placeholder:string
}

export default function TextInput({
    placeholder ,
    onChange
}:PropType){
     return (
          <div> 
            <input style={{border:'2px',
                  borderRadius:'5px',
                  padding:'10px',
                    width:'300px',
                    height:'50px',
                    fontSize:'20px',
                    backgroundColor:'grey',
                    color:'white',
                    fontFamily:'Arial, sans-serif',     

            }} type="text"  placeholder={placeholder}  onChange={onChange}/>
          </div>
     )
}