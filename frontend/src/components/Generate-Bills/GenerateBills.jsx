// import React from 'react'
import './GenerateBills.css'
import PropTypes from "prop-types"
import CustomInput from '../Input/CustomInput'

const GenerateBills = ({ heading, inputs,children }) => {
    return (            
        <div className='generate-bills drop-shadow-lg my-4 '>
            <h2 className="heading ">{heading}</h2>
            <div className="inputs-parent">
                {
                    inputs.map((input, index) => (
                        <CustomInput
                            key={index}
                            labelText={input.label}
                            placeholder={input.placeholder}
                            onChange={input.onChange}
                            type={input.type}
                            className={input.className}
                            disabled={input.disabled}
                            inputName={input.name}
                            value={input.value}
                            />
                        ))
                    }
            </div>
            { children && children}
        </div>
    )
}

export default GenerateBills
GenerateBills.propTypes={
    heading:PropTypes.string,
    inputs:PropTypes.array,
    children:PropTypes.object
}