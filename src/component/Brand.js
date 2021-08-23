import React, { useContext } from 'react'
import MainContext from './MainContext'
import ClipboardButton from 'react-clipboard.js';


function Brand({ brand }) {

    const { selectedBrands, setSelectedBrands, setCopied } = useContext(MainContext)

    const toggleSelected = () => {
        if (selectedBrands.includes(brand.slug)) {
            setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
        } else {
            setSelectedBrands([...selectedBrands, brand.slug])
        }
    }

    const setColor = (color) => {
        setCopied(color)
    }

    return (
        <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>
            <h4 onClick={toggleSelected}> {brand.title} </h4>
            <div className="brand-colors">
                {brand.colors.map(color => (
                    <ClipboardButton component="span" onSuccess={() => setColor(color)} style={{ '--bgColor': `#${color}` }} data-clipboard-text={color}> {color} </ClipboardButton>

                ))}

            </div>
        </div>
    )
}

export default Brand
