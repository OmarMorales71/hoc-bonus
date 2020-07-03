import React from 'react'
import withLogin from '../HOC/withLogin'
import useCounter from '../CustomHooks/useCounter'

const Private = (props) => {
    const counter = useCounter()
    return (
        <div>
            {console.log(props)}

            <h1>{props.loggued ? 'Pagina privada' : 'Login no  valido'}</h1>
            <div>
                {counter.count}
                <button onClick={counter.increase}>+</button>
                <button onClick={counter.decrease}>-</button>
            </div>
        </div>
    )
}
export default withLogin(Private)