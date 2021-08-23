import { useContext, useState, useEffect } from 'react'
import MainContext from './MainContext'
import { GrLink, GrDownload, GrClose } from "react-icons/gr";



function Download() {
    const { selectedBrands, setSelectedBrands, brands } = useContext(MainContext)
    const getLink = () => {
        prompt('Your Link Is Here', `http://localhost:3000/${selectedBrands.join(',')}`)
    }
    const [downloadUrl, setDownloadUrl] = useState()

    useEffect(() => {
        if (selectedBrands.length > 0) {
            let output = ''
            selectedBrands.map(slug => {
                let brand = brands.find(brand => brand.slug === slug)
                brand.colors.map((color, key) => {
                    output += `--${slug}-${key}: #${color};/a`
                })
            })
            const blob = new Blob([output])
            const url = URL.createObjectURL(blob)
            setDownloadUrl(url)
            return () => {
                URL.revokeObjectURL(url)
                setDownloadUrl('')
            }
        }
    }, [selectedBrands])


    return (
        <div className="download">
            <div className="actions"></div>
            <a download="brandColor.css" href={downloadUrl}>
                <GrDownload />
            </a>

            <button onClick={getLink}>
                <GrLink />
            </button>

            <div className="selected" >
                <button onClick={() => setSelectedBrands([])}> <GrClose /> </button>
                {selectedBrands.length} brands collected
            </div>
        </div>
    )
}

export default Download
