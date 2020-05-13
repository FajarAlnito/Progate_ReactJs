import React from 'react';

class ContactForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isSubmitted: false,
            email: "",
            hasEmailError: false,
            content: '',
            contentError: false,

        };
    }
    handleSubmit(){
        this.setState({isSubmitted: true});
    }
    handleEmailChange(event){
        const inputValue= event.target.value;
        const isEmpty = inputValue==='';
        this.setState({
            email: inputValue,
            hasEmailError: isEmpty,
        })
    }
    handleContentChage(event){
        const inputValue= event.target.value;
        const isEmpty= inputValue==='';

        this.setState({
            content: inputValue,
            contentError: isEmpty,
        })
    }
    render(){
        let contactForm;
        let emailErrorT;
        let contentErrorT;
        if(this.state.contentError){
            contentErrorT=(
                <p className="contact-message-error">Masukkan pesan anda</p>
            )
        }
        if(this.state.hasEmailError){
            emailErrorT=(
                <p className="contact-message-error">Masukkan alamat email anda</p>
            )
        }
        if(this.state.isSubmitted){
            contactForm=(
                <div className='contact-submit-message'>
                    Pesan Terkirim
                </div>
            );
        }else{
            contactForm=(
                <form onSubmit={()=>{this.handleSubmit()}}>
                    <p>Email (Wajib diisi)</p>
                    <input type="email" placeholder="Email" value={this.state.email} 
                        onChange={(event)=>{this.handleEmailChange(event)}}
                    />
                    {emailErrorT}
                    <p>Pesan (Wajib diisi)</p>
                    <textarea />
                    {contentErrorT}
                    <input type="submit" value="Kirim" />
                </form>
            );
        }
        return(
            <div className="contact-form">
                {contactForm}
            </div>
        )
    }
}

export default ContactForm; 