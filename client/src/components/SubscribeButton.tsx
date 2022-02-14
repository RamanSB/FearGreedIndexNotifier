
export const SubscribeButton = (props: any) => {

    function handleFormSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        let {email, phone} = props;
        console.log(email, phone);
        console.log(`Subscribe button clicked.`);
    }

    return (
        <div className="submit-btn-container">
            <button className="submit-btn" onClick={handleFormSubmit}>{props.children}</button>
        </div>
    );
}