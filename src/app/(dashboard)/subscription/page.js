import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const items = [
    {
        icon: '/icons/cancel.svg',
        title: 'Cancel your subscription',
        text: 'You can cancel a subscription from Next Asssess, or a subscription you purchased in an app, directly in the App Store on your device.',
        linkText: 'Start your cancellation',
        link: '/subscription'
    },
    {
        icon: '/icons/refund.svg',
        title: 'Request a refund',
        text: 'Some purchases may be eligible for a refund. To request one, click the link below, sign in, and select "Request a refund."',
        linkText: 'Start a refund request',
        link: '/subscription'
    },
    {
        icon: '/icons/declined.svg',
        title: 'If your payment method is declined',
        text: "If you can't make purchases in the App Store or iTunes Store, add a new payment method or update your payment information.",
        linkText: 'Fix declined payments',
        link: '/subscription'
    },
    {
        icon: '/icons/history.svg',
        title: 'View your purchase history',
        text: 'You can find a history of the apps, subscriptions, music, and other content you bought from the App Store and iTunes Store. ',
        linkText: 'Find your purchase history',
        link: '/subscription/billing'
    },
    {
        icon: '/icons/manage.svg',
        title: 'Manage your payment information',
        text: 'View payment methods on file, change the order of your payment method, or update your billing information.',
        linkText: 'Change, add, or remove a payment method',
        link: '/subscription'
    },
    {
        icon: '/icons/confirm.svg',
        title: 'Confirm billing charges',
        text: 'Learn how to look up your purchase history and verify charges that appear on your billing statement from Next Assess.',
        linkText: 'Identify unfamiliar charges',
        link: '/subscription'
    }
]

export default function Subscription() {
    return (
      <div>
        <h3 className="text-[#101828] text-3xl font-semibold">Billing & Subscription</h3>
        <p className="text-[#475467] text-base font-normal mt-2">Track, manage and forecast your presentations.</p>
        <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    items.map((item, index) => (
                        <div key={index} className="m-0 p-8 rounded-2xl bg-white">
                            <div className="flex gap-7">
                                <div>
                                    <Image src={item.icon} width={200} height={200} />
                                </div>
                                <div>
                                    <h6 className="text-[#061C3D] font-semibold text-[16px] leading-[0.22px]">{item.title}</h6>
                                    <p className="text-[#42526B] text-base leading-[-0.37px] mt-4 mb-5">{item.text}</p>
                                    <Link href={item.link} className="flex gap-3 font-normal items-center text-[#0B63E5] leading-[20.83px] text-[13px]">{item.linkText} <FaArrowRightLong /></Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    );
  }