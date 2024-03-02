import SearchIcon from '@mui/icons-material/Search';
const Search=()=>{
    return(
        <div className="search-container">
         
            <SearchIcon className='search-icon'/>
            <input type="text" placeholder="search" className='input' />
            
            
        </div>

    )
}
export default Search;