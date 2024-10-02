import Link from "next/link"

export default function Header (){
    return (
<ul className="flex gap-20 bg-yellow-400">
    <Link href="/"><li>Home</li></Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <Link href="/about"><li>About</li></Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <Link href="/contactus"><li>Contact Us</li></Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <Link href="/job"><li>Job</li></Link>
</ul> 
    )
}