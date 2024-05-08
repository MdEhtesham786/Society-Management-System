import PropTypes from 'prop-types'
import React, { useRef } from 'react'

const Select = (props)=>{
    const {id,name,defaultValue,optionArr,classNames,selectRef} = props
    return(
<>
<select
                  id={id} name={name} ref={selectRef}
                  defaultValue={defaultValue}
                  className={`font-[500] bg-gray-50 border border-[#d5d5d5] text-[#282828]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${classNames} `}
                >
                   { optionArr.map((option,i)=>{
                    {console.log(option.defaultChecked)}
                        return(
                            <option  key={i}  value={option.value}>{option.title}</option>

                        )
                    })}
                </select>
</>
    )
}
Select.propTypes = {
    id:PropTypes.string,
    optionArr:PropTypes.array,
    defaultValue:PropTypes.string,
    name:PropTypes.string,
    classNames:PropTypes.string,
    selectRef:PropTypes.func

}
Select.defaultProps = {
    optionArr:[],
    defaultChecked:false
}

export default Select
