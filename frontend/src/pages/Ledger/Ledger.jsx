import  { useState } from 'react'
import GenerateBills from '../../components/Generate-Bills/GenerateBills'
import CustomButton from '../../components/Button/CustomButton'
import './Ledger.css'

const Ledger = () => {
  // Bill Amounts
  const [type, setType] = useState('')
  const [subtype, setSubtype] = useState('')
  const [isCreditCheck, setIsCreditCheck] = useState(false)
  const [billDate, setBillDate] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [creditAmount, setCreditAmount] = useState('')

  // Rebate
  const [rebateDate, setRebateDate] = useState('')
  const [rebateDays, setRebateDays] = useState('')
  const [rebatePercentage, setRebatePercentage] = useState(false)
  const [interestType, setInterestType] = useState('')
  const [interestDays, setInterestDays] = useState('')
  const [interestPercentage, setInterestPercentage] = useState('')
  const [manualInterest, setManualInterest] = useState('')

  // Selection
  const [building, setBuilding] = useState('')
  const [wing, setWing] = useState('')
  const [name, setName] = useState('')

  const amountInputHandlers = [
    { onChange: (e) => setType(e.target.value), value: type },
    { onChange: (e) => setSubtype(e.target.value), value: subtype },
    { onChange: (e) => setIsCreditCheck(e.target.checked), value: isCreditCheck },
    { onChange: (e) => setBillDate(e.target.value), value: billDate },
    { onChange: (e) => setDueDate(e.target.value), value: dueDate },
    { onChange: (e) => setCreditAmount(e.target.value), value: creditAmount }
  ];

  const rebateInputHandlers = [
    { onChange: (e) => setRebateDate(e.target.value), value: rebateDate },
    { onChange: (e) => setRebateDays(e.target.value), value: rebateDays },
    { onChange: (e) => setRebatePercentage(e.target.value), value: rebatePercentage },
    { onChange: (e) => setInterestType(e.target.value), value: interestType },
    { onChange: (e) => setInterestDays(e.target.value), value: interestDays },
    { onChange: (e) => setInterestPercentage(e.target.value), value: interestPercentage },
    { onChange: (e) => setManualInterest(e.target.value), value: manualInterest }
  ];

  const selectionInputHandlers = [
    { onChange: (e) => setBuilding(e.target.value), value: building },
    { onChange: (e) => setWing(e.target.value), value: wing },
    { onChange: (e) => setName(e.target.value), value: name }
  ];

  const amountInputs = [
    { label: 'Type:', ...amountInputHandlers[0] },
    { label: 'Subtype:', ...amountInputHandlers[1] },
    { label: 'is Credit Limit?', type: 'checkbox', ...amountInputHandlers[2] },
    { label: 'Bill Date', type: 'date', ...amountInputHandlers[3] },
    { label: 'Due Date', type: 'date', ...amountInputHandlers[4] },
    { label: 'Credit Amount', type: 'number', ...amountInputHandlers[5] }
  ];

  const rebateInputs = [
    { label: 'Rebate Date :', type: 'date', ...rebateInputHandlers[0] },
    { label: 'Rebate Days :', type: 'number', ...rebateInputHandlers[1] },
    { label: 'RebatePerc(%):', type: 'number', ...rebateInputHandlers[2] },
    { label: 'Type:', ...rebateInputHandlers[3] },
    { label: 'Interest Days :', type: 'number', ...rebateInputHandlers[4] },
    { label: 'InterestPerc(%):', type: 'number', ...rebateInputHandlers[5] },
    { label: 'Manual Interest ?', type: 'checkbox', ...rebateInputHandlers[6] },
  ];

  const selectionInputs = [
    { label: 'Building:', ...selectionInputHandlers[0] },
    { label: 'Wing:', ...selectionInputHandlers[1] },
    { label: 'Name:', ...selectionInputHandlers[2] }
  ];

  return (
    <>
        
        <div className="bills" >
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

export default Ledger