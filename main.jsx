const GetName = (props) => {
    return props.name;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

const element = <GetName username="sontv" />;
root.render(element);