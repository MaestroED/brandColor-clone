import './App.css';
import Sidebar from './component/Sidebar';
import Content from './component/Content';
import MainContext from './component/MainContext';
import BrandsData from './brands.json'
import { useState, useEffect } from "react"
import Copied from './component/Copied';


function App() {

  const brandsArray = []
  Object.keys(BrandsData).map(key => {
    brandsArray.push(BrandsData[key])
  })
  const [copied, setCopied] = useState(false)
  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [search, setSearch] = useState('')
  const data = {
    brands,
    selectedBrands,
    search,
    setSelectedBrands,
    setCopied,
    setSearch,
  }

  useEffect(() => {
    console.log(selectedBrands);
  }, [selectedBrands])

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, 750)
    }
  })

  useEffect(() => {
    setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search)))
  }, [search])


  return (
    <>
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Sidebar />
        <Content />
      </MainContext.Provider>
    </>
  );
}

export default App;
