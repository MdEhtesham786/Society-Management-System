import loading from './loading.gif'
const Spinner=()=> {
        return(
<div className='h-full grid place-items-center'>
<img src={loading} className=" h-32" alt="loader" />
</div>
        )
} 
export default Spinner