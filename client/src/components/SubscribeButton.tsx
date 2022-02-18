import { useNavigate } from "react-router-dom";

export const SubscribeButton = (props: any) => {

    let navigate = useNavigate();

    function handleFormSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        let {email, phone} = props;
        console.log(email, phone);
        console.log(`Subscribe button clicked.`);
        console.log(`Navigate to payment function`);
        navigate('/preferences');
    }

    return (
        <div className="submit-btn-container">
            <button className="submit-btn" onClick={handleFormSubmit}>{props.children}</button>
        </div>
    );
}