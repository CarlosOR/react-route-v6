import { SelectBox } from '../../../Customs-components/SelectBox/SelectBox'
import { TextBox } from '../../../Customs-components/TextBox/TextBox'

import './BasicDataForm.css'
import { UseForm } from '../../../Customs-components/hooks/useForm';
import { IBasicDataForm } from '../../../interfaces/IBasicDataForm';
import { Button, EColorButton } from '../../../Customs-components/Button/Button';
import { Modal } from '../../../Customs-components/Modal/Modal';
import { UseModal } from '../../../Customs-components/Modal/hook/useModal';
import { useNavigate } from 'react-router-dom';

export const BasicDataForm = () => {
    const { form, onValueChange } = UseForm<IBasicDataForm>({
        name: '',
        lastNanme: '',
        residence: -1
    });

    const { show, showState } = UseModal(false);

    const list = [...(Array(10) as any).keys()].map(v =>
    ({
        key: v,
        text: v.toString() + " Algo"
    }));

    const handleClick = (button: string) => {
        //console.log("Button", button);
        showState(!show);
    }

    const navigate = useNavigate();

    const handleNavigation = (response: boolean) => {
        response && navigate("/other-data/OtherData");
    }

    return (
        <>
            <div className="form-container">
                <div className="form-item">
                    <TextBox
                        name="name"
                        label="Name"
                        onChange={onValueChange}
                    />
                </div>
                <div className="form-item">
                    <TextBox
                        name="lastName"
                        label="Last name"
                        onChange={onValueChange}
                    />
                </div>
                <div className="form-item">
                    <SelectBox
                        name="residence"
                        label="City of residence"
                        onChange={onValueChange}
                        values={list}
                    />
                </div>
                <div className="form-item">
                    <Button
                        text='Submit'
                        color={EColorButton.blue}
                        onClick={() => handleClick(EColorButton.blue)}
                    />
                </div>
                <div className="form-item">
                    <Button
                        text='Submit'
                        color={EColorButton.red}
                        onClick={() => handleClick(EColorButton.red)}
                    />
                </div>
                <div className="form-item">
                    <Button
                        text='Submit'
                        color={EColorButton.green}
                        onClick={() => handleClick(EColorButton.green)}
                    />
                </div>
            </div>
            {show ? 'true': 'false'}
            <Modal title={'Show the modal'} show={show} onShow={showState} onResult={handleNavigation} >
                <div className="">
                    <h1>Thank you to use this modal, go to other page</h1>
                </div>
            </Modal>
            {JSON.stringify(form, null, 3)}
        </>
    )
}
