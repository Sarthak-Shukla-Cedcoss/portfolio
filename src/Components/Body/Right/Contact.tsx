import React from 'react'
import data from '../../data/data.json'
export default function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            {(data.contact.address.enable === true)
                &&
                <div>Address : {data.contact.address.street},{data.contact.address.locality},
            <br />
                    {data.contact.address.city},{data.contact.address.state},{data.contact.address.pincode}</div>}
            {data.contact.phone.map((phoneData: number, key: number) => {
                return (
                    <div>
                        Phone {key+1} : {phoneData}
                    </div>
                )
            })}
              {data.contact.mail.map((email: string, key: number) => {
                return (
                    <div>
                        Email {key+1} : {email}
                    </div>
                )
            })}
            <div>
                {data.contact.social.map((accounts: { account: string, url: string }) => {
                    return (
                        <a href={accounts.url}>{accounts.account}</a>)
                })}
            </div>
        </div>
    )
}
