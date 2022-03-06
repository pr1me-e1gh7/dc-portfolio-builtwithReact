import React from "react";
import bkgd from "../images/contact.gif";
import { Row, Col, Form, Input, Button, Space, notification } from 'antd';

// const { TextArea } = Input;
// const SENDGRID_API_KEY = "<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>";
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

function Contact () {
    // const [form] = Form.useForm();

	// const onComplete = (fields) => {
	// 	const message = {
	// 		to: 'dcaro1996@yahoo.com',
	// 		from: fields.email,
	// 		subject: fields.subject,
	// 		html: `
    //   <p><strong>Name:</strong> ${fields.name}</p>
    //   <p>${fields.message}</p>`,
	// 	};

	// 	sgMail
	// 		.send(message)
	// 		.then(() => {
	// 			form.resetFields();
	// 			console.log('Email Sent!');
	// 			notification.open({
	// 				message: 'Message successfu!',
	// 				description: 'We have successfully received your email.',
	// 			});
	// 		})
	// 		.catch((error) => {
	// 			console.error('Error: ', error);
	// 		});
	// };
    
    return (
        <div>
            <img src={bkgd} alt="Contact" className="custom-img absolute object-cover w-full h-full"></img>
            {/* <Row gutter={24} style={{ padding: '30px' }}>
			<Col xl={12}>
				<Form layout='vertical' form={form} onFinish={onComplete}>
					<Form.Item
						name='name'
						label='Name'
						rules={[
							{
								required: true,
							},
						]}>
						<Input />
					</Form.Item>
					<Form.Item
						name='email'
						label='Email'
						rules={[
							{
								required: true,
							},
						]}>
						<Input />
					</Form.Item>
					<Form.Item
						name='subject'
						label='Subject'
						rules={[
							{
								required: true,
							},
						]}>
						<Input />
					</Form.Item>
					<Form.Item
						name='message'
						label='Message'
						rules={[
							{
								required: true,
							},
						]}>
						<TextArea />
					</Form.Item>
					<Form.Item>
						<Space>
							<Button type='primary' htmlType='submit'>
								Submit
							</Button>
							<Button
								type='secondary'
								htmlType='submit'
								onClick={(e) => form.resetFields()}>
								Clear
							</Button>
						</Space>
					</Form.Item>
				</Form>
			</Col>
		</Row> */}
            <main className="relative">
                <div className="p-10 lg:pt48 container mx-auto relative">
                    {/* Space for Nav */}
                    <br></br>
                    {/* Background */}
                    <section className="bg-black text-green-400 rounded-lg p-5">
                        <div className="text-lg flex">
                            <h2 className="text-5xl mb-2" id="custom-contact">&lt;Got a Question?&gt;</h2>
                        </div>
                    </section>
                    <br></br>
                    {/* Space for footer */}
                    <br></br>
                    <br></br>
                </div>
            </main>
            {/* <Row gutter={24} style={{ padding : '30px'}} />
                <Col xl={12}>
                    <Form form={form}>
                        <Form.Item>
                            <Space>
                                <Button type="primary">Submit</Button>
                                <Button type="secondary" onClick={(e) => form.resetFields()}>
                                    Clear</Button>
                            </Space>
                        </Form.Item>
                    </Form>        
                </Col> */}

        </div>
    );
};

export default Contact;