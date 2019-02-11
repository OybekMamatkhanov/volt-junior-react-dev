import React, { Component } from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';

export default class DynamicForm extends Component {
    constructor(props) {
        super(props);
    }

    renderForm() {
        let models = this.props.model;
        let columns = this.props.columns;

        let formUI = columns.map((m) => {
            let key = m.id;
            let type = m.field || "text"
            let name = m.name;

            let input = <input
                key={key}
                type={type}
                name={name}
            />

            return (
                <div key={'g' + key} className="form-group">
                    <label className="form-label"
                        key={'l' + key}
                        htmlFor={key}>
                        {name}
                    </label>
                    {input}
                </div>
            );
        });

        return formUI;

    }

    render() {
        let title = this.props.title ;
        return (
            <div className={title}>
                <h3>{title}</h3>
                <form>
                    <FormGroup
                        controlId="formBasicText"                        
                    >
                        {this.renderForm()}
                        <Button type="submit">Edit</Button>
                    </FormGroup>
                </form>
            </div>
        )
    }
}
