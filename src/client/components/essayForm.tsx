import * as React from "react";
import { FormEvent } from "react";
//TODO: 
// 1. Add <select> elements
// 2. Add uncontrolled componenets <input type="file" />
export class EssayForm extends React.Component<{}, { enableInput: boolean, essayContent: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            enableInput: true,
            essayContent: ""
        };
        this.handleInputCheckBoxChange = this.handleInputCheckBoxChange.bind(this);
        this.handleInputTextChange = this.handleInputTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Input essay:
                    <input name="test" type="checkbox" checked={this.state.enableInput} onChange={this.handleInputCheckBoxChange} />
                </label>
                <input name="ess" type="text" value={this.state.essayContent} disabled={!this.state.enableInput} onChange={this.handleInputTextChange} />
                <div>
                    <label>
                        Essay Content:
                        <textarea value={this.state.essayContent} readOnly={true} />
                    </label>
                </div>
                <input type="submit" value="submit" />
            </form>
        );
    }
    handleInputCheckBoxChange(event: FormEvent<HTMLInputElement>) {
        this.setState({
            enableInput: event.currentTarget.checked
        });
    }
    handleInputTextChange(event: FormEvent<HTMLInputElement>) {
        this.setState({
            essayContent: event.currentTarget.value
        });
    }
    handleSubmit(event: FormEvent<HTMLFormElement>) {
        alert(`The essay content is ${this.state.essayContent}`);
        event.preventDefault();
    }
}