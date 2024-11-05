import React, { useState } from 'react'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import styles from '../styles/styles'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
const FaqPage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <Faq />
      <Footer />
    </div>
  )
}

const faqQueries = [
  {
    qsn: ' What is your return policy?',
    ans: 'If you are not satisfied with your purchase, we accept returns within 30 days of delivery. To initiate a return, please email us at support@myecommercestore.com with your order number and a brief explanation of why you are returning the item.',
  },
  {
    qsn: 'How do I track my order?',
    ans: 'You can track your order by clicking the tracking link in your shipping confirmation email, or by logging into your account on our website and viewing the order details.',
  },
  {
    qsn: ' How do I contact customer support?',
    ans: 'You can contact our customer support team by emailing us at saenus@gmail.com, or by calling us at 8074149763 between the hours of 9am and 5pm EST, Monday through Friday.',
  },
  {
    qsn: 'Can I change or cancel my order?',
    ans: 'Unfortunately, once an order has been placed, we are not able to make changes or cancellations. If you no longer want the items you have ordered, you can return them for a refund within 30 days of delivery.',
  },
  {
    qsn: 'Do you offer international shipping?',
    ans: 'Currently, we only offer shipping within the  India.',
  },
  {
    qsn: 'What payment methods do you accept?',
    ans: 'We accept visa,mastercard,paypal payment method also we have cash on delivery system.',
  },
]
const Faq = () => {
  return faqQueries.map((query) => (
    <Accordion type="multiple" collapsible className="w-full s  my-8 px-4">
      <AccordionItem
        value="item-1"
        className="mb-4  rounded-lg overflow-hidden"
      >
        <AccordionTrigger className="text-lg sm:text-xl font-semibold p-4 hover:bg-gray-100 transition-colors">
          {query.qsn}
        </AccordionTrigger>
        <AccordionContent className="text-gray-50 sm:text-lg p-4 bg-gray-800">
          {query.ans}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ))
}

export default FaqPage
