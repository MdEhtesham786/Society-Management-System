import  { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GenerateBills from '../../components/Generate-Bills/GenerateBills'
import CustomButton from '../../components/Button/CustomButton'
import PropTypes from "prop-types"
import './Ledger.css'

const Ledger = (props) => {
const navigate = useNavigate()
  // Bill Amounts 6
  const [type, setType] = useState('')
  const [subtype, setSubtype] = useState('')
  const [isCreditCheck, setIsCreditCheck] = useState(false)
  const [billDate, setBillDate] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [creditAmount, setCreditAmount] = useState('')

  // Rebate 7
  const [rebateDate, setRebateDate] = useState('')
  const [rebateDays, setRebateDays] = useState('')
  const [rebatePercentage, setRebatePercentage] = useState(false)
  const [interestType, setInterestType] = useState('')
  const [interestDays, setInterestDays] = useState('')
  const [interestPercentage, setInterestPercentage] = useState('')
  const [manualInterest, setManualInterest] = useState('')

  // Selection 3
  const [building, setBuilding] = useState('')
  const [wing, setWing] = useState('')
  const [name, setName] = useState('')

  const amountInputHandlers = [
    { onChange: (e) => setType(e.target.value), value: type,label:'Type' },
    { onChange: (e) => setSubtype(e.target.value), value: subtype,label:'SubType' },
    { onChange: (e) => setIsCreditCheck(e.target.checked), value: isCreditCheck,label:'is Credit Limit?',type:'checkbox' },
    { onChange: (e) => setBillDate(e.target.value), value: billDate,label:'Bill Date' },
    { onChange: (e) => setDueDate(e.target.value), value: dueDate,label:'Due Date' },
    { onChange: (e) => setCreditAmount(e.target.value), value: creditAmount,label:'Credit Amount' }
  ];

  const rebateInputHandlers = [
    { onChange: (e) => setRebateDate(e.target.value), value: rebateDate,label:'Rebate Date :',type:'date' },
    { onChange: (e) => setRebateDays(e.target.value), value: rebateDays,label:'Rebate Days :',type:'number' },
    { onChange: (e) => setRebatePercentage(e.target.value), value: rebatePercentage,label:'RebatePerc(%):',type:'checkbox' },
    { onChange: (e) => setInterestType(e.target.value), value: interestType,label:'Type:',type:'text' },
    { onChange: (e) => setInterestDays(e.target.value), value: interestDays,label:'Interest Days :',type:'number' },
    { onChange: (e) => setInterestPercentage(e.target.value), value: interestPercentage,label:'InterestPerc(%):',type:'number' },
    { onChange: (e) => setManualInterest(e.target.value), value: manualInterest,label:'Manual Interest ?',type:'checkbox' }
  ];

  const selectionInputHandlers = [
    { onChange: (e) => setBuilding(e.target.value), value: building,label:'Building' },
    { onChange: (e) => setWing(e.target.value), value: wing,label:'Wing' },
    { onChange: (e) => setName(e.target.value), value: name,label:'Name' }
  ];
    //   const amountInputs = [
    // { label: 'Type:', ...amountInputHandlers[0] },
    // { label: 'Subtype:', ...amountInputHandlers[1] },
    // { label: 'is Credit Limit?', type: 'checkbox', ...amountInputHandlers[2] },
    // { label: 'Bill Date', type: 'date', ...amountInputHandlers[3] },
    // { label: 'Due Date', type: 'date', ...amountInputHandlers[4] },
    // { label: 'Credit Amount', type: 'number', ...amountInputHandlers[5] }
  // ];
  const amountInputs = []
  amountInputHandlers.forEach((input,index)=>{
  amountInputs.push({
     label: input.label,
      onChange:input.onChange,
      value:input.value,
      type:input.type
    })
    })
  // const rebateInputs = [
  //   { label: 'Rebate Date :', type: 'date', ...rebateInputHandlers[0] },
  //   { label: 'Rebate Days :', type: 'number', ...rebateInputHandlers[1] },
  //   { label: 'RebatePerc(%):', type: 'number', ...rebateInputHandlers[2] },
  //   { label: 'Type:', ...rebateInputHandlers[3] },
  //   { label: 'Interest Days :', type: 'number', ...rebateInputHandlers[4] },
  //   { label: 'InterestPerc(%):', type: 'number', ...rebateInputHandlers[5] },
  //   { label: 'Manual Interest ?', type: 'checkbox', ...rebateInputHandlers[6] },
  // ];
  const rebateInputs = []
  rebateInputHandlers.forEach((input,index)=>{
  rebateInputs.push({
     label: input.label,
      onChange:input.onChange,
      value:input.value,
      type:input.type
    })
    })
  // const selectionInputs = [
  //   { label: 'Building:', ...selectionInputHandlers[0] },
  //   { label: 'Wing:', ...selectionInputHandlers[1] },
  //   { label: 'Name:', ...selectionInputHandlers[2] }
  // ];
  const selectionInputs = []
  selectionInputHandlers.forEach((input,index)=>{
    selectionInputs.push({
     label: input.label,
      onChange:input.onChange,
      value:input.value
    })
    })
  return (
    <>
        <div className=''>
          <h2 className='text-2xl font-semibold text-center'>Generate Bills</h2>
          <GenerateBills
            inputs={amountInputs}
          >
          {<div className="textarea-wrapper">
                <label htmlFor="">Narration</label>
                <textarea style={{resize:'none', padding:"0.5rem"}} name="" id="" cols="10" rows="3"></textarea>
              </div>}
              </GenerateBills>
          <GenerateBills
            heading={'Rebate On null'}
            inputs={rebateInputs}
          />
          <GenerateBills
            heading={'Selection'}
            inputs={selectionInputs}
          />
          <div className='bill-btns'>
            <CustomButton
              type={'submit'}
              style={{ backgroundColor: '#119F8E', boxShadow: '2px 4px 4px 0px #00000040', border:'1px solid #000000'}}
            >
              {'Generate Bills'}
              </CustomButton>
            <CustomButton
              style={{ backgroundColor: '#045E92', boxShadow: '2px 4px 4px 0px #00000040',border:'1px solid #000000' }}
            >
              {'Edit Bills'}
              </CustomButton>
            <CustomButton
              style={{ backgroundColor: '#A9CEED', boxShadow: '2px 3px 3px 0px #00000040', border:'1px solid #000000' }}
            >
              {'View'}
              </CustomButton>
          </div>
        </div>
    </>
  )
}
Ledger.propTypes = {
  user:PropTypes.object
}
export default Ledger