---
layout: page
title: About
#showTitle: false
permalink: /help/about/joe/
---

{% capture content %}

## Joseph Hall

Joseph Hall has been a professional software developer for more than 30 years. He has worked as a programmer for Microsoft, IBM, and Thoughtworks; he was the software architect for a Fortune 500 bank; he was the CTO of an online ticket sales and servicing company; and he started his own consulting companies in 2006 (Codetopia, LLC, AL) and 2015 (Ososoft, LLC, GA).

Joe makes his living writing desktop, web, and mobile device applications for businesses and governmental agencies, but game programming is his passion, and it was gaming that got him into programming in the first place. He was a member of the original Xbox team and he joined the Visual Studio .NET team just after the Xbox was released in 2001.

He is the author of <em><a href="http://amzn.to/1JuxvD8" target="_blank">XNA Game Studio Express: Developing Games for Windows and the Xbox 360</a></em>, which was published in 2007, and <em>Fauxcabulary: Fake Definitions, Real Funny</em>, which was self-published in 2015 (for <a href="https://leanpub.com/fauxcabulary" target="_blank">eBook</a> and <a href="http://www.lulu.com/shop/http://www.lulu.com/shop/joseph-hall/fauxcabulary/paperback/product-22179468.html" target="_blank">print</a>). He has several new books in the pipeline including a multi-volume series on MonoGame development using Xamarin Studio and a techno-thriller trilogy set in the not-so-distant future.

Today, Joe lives with his wife and three daughters in Newnan, Georgia. Every summer, from 2011 through 2018, Joe taught high school students how to write video games during an intense weeklong course in North Carolina for Landry Academy. In his free time, Joe dabbles in sketching, cartooning, and creating 3D models. When you see his artistic creations, you’ll understand why he makes his living as a programmer.

{% endcapture %}
{% assign imagePath = "/assets/images/joe.png" | relative_url %}
{% include about-resume-person.liquid imagePath=imagePath content=content altText="Joe Hall avatar" %}


<!-- ---------------------- RESUME ---------------------- -->

{% include about-resume-section-header.liquid title="Résumé" %}


{% capture content %}

In 2015, I moved my family to Newnan, Georgia, for a job with (arguably) the most rabid advocates for agile methodolgies, test-driven development, and pair programming &mdash; Thoughtworks, Inc. At that time, it was easier to let my Alabama LLC lapse and start a new company than to transfer the entity to Georgia. Ososoft is the vehicle by which I do all my contract work these days.

{% endcapture %}
{% include about-resume-item.liquid 
    employer="Ososoft, LLC" 
    title="Software Developer, Owner" 
    period="Jul 2016 - Current" 
    location="Atlanta, GA" 
    content=content %}

{% capture content %}

I loved my first stint with Thoughtworks in 2015, but I didn't love the 100% travel. When they contacted me to return to a 100% remote culture, I jumped at the chance. Of all the places I've worked, I've never learned more than I have during my time with this company. Under their umbrella, I wrote apps in Java, .NET, JavaScript, and Microsoft technologies specifically tailored to the development of chatbots including their brand of NLP, LLM, and OpenAI; and later to include MSFT's Dynamics 365 CRM.

{% endcapture %}
{% include about-resume-item.liquid 
    employer="Thoughtworks, Inc" 
    title="Software Developer" 
    period="Mar 2015 - Jul 2016, <br/>Aug 2021 - Current" 
    location="Atlanta, GA" 
    content=content %}

{% capture content %}

I was fortunate enough to work with a great team of developers, writing logistical applications for the Air Force in Java and related technologies.

{% endcapture %}
{% include about-resume-item.liquid 
    employer="eSA, Inc" 
    title="Sr. Java Developer" 
    period="May 2012 - Mar 2015" 
    location="Montgomery, AL" 
    content=content %}

{% capture content %}

At the AL Department of Education, my team was brought in to implement a system for processing the issuance and renewal of teaching certificates. The process was paper-based and it could take as much as 9 months to get a certificate issued or renewed. We were able to radically rework their process, distribute the work load to the field agents, and automate the workflows so that the 9-month process could be completed in around 5 minutes. From application, to payment, to digital issuance of the certificates &mdash; Certification Specialists were able to focus their time on exceptional cases (like failed background checks, or missing continuing education credits). 

{% endcapture %}
{% include about-resume-item.liquid 
    employer="AL Dept. of Ed." 
    title="Sr. .NET Developer" 
    period="Jun 2008 - May 2012,<br/>Jul 2017 - Oct 2018" 
    location="Montgomery, AL" 
    content=content %}

{% capture content %}

I got a call from a programming buddy asking if I wanted to play a role in their startup venture. They were building a business to fill in the gaps left by giants in the area of ticket sales and servicing. Think TicketMaster, EventBright, LiveNation, ... but at a much smaller scale. I managed a small team of developers and made the architectural decisions for new tech. I also got to keep my hands in the code, which has always been a requirement of mine. 

{% endcapture %}
{% include about-resume-item.liquid 
    employer="TicketBiscuit, LLC" 
    title="Chief Technical Officer" 
    period="Jul 2007 - Jun 2008" 
    location="Birmingham, AL" 
    content=content %}

{% capture content %}

While working for Regions bank, I managed a few contract software developers in addition to my regular duties as the software architect. I became friends with the contractors and decided that I would like to give working for myself a go. With no savings, no prospective clients, and no plan, I left my W2 and stepped into the 1099 world. I never went without work. My only marketing was by word of mouth.

{% endcapture %}
{% include about-resume-item.liquid 
    employer="Codetopia, LLC" 
    title="Software Developer, Owner" 
    period="Feb 2006 - Aug 2021" 
    location="Montgomery, AL" 
    content=content %}

{% capture content %}

At Regions, I started out as a programmer in VB6, VB.NET, C#, Java, and C/C++. A couple of mergers later and I was leading the architecture side of the house. I met many strong developers, many of whom I still call my friends.

{% endcapture %}
{% include about-resume-item.liquid 
    employer="Regions Bank" 
    title="Software Architect" 
    period="Dec 2002 - Feb 2006" 
    location="Montgomery, AL" 
    content=content %}

{% capture content %}

I was using Java since the time it was in beta, so I was a great fit for the Visual J++ team at Microsoft. In those days, MSFT was pushing the concept of managed code, rooted in the Java language. Then the Sun lawsuit hit and MSFT decided to pivot to creating their own managed code tools and languages. I was using C# before it was released to the general public. In fact, I trained the  Java developers on migrating to C#. Shortly thereafter, I landed my dream job &mdash; as a Programmer/Writer on the original Xbox team. Once the  console launched, I moved over to the Visual Studio .NET team, as an SDET on the performance team.

{% endcapture %}
{% include about-resume-item.liquid 
    employer="Microsoft" 
    title="Programmer / Writer, SDET" 
    period="Oct 1998 - Dec 2002" 
    location="Redmond, WA" 
    content=content %}

{% capture content %}

I started with IBM as a multimedia programmer (yes, that was a thing) working in a technology called Icon Author, and I transitioned to a web developer around the time Java was coming into its own as a client-side web technology. In addition to Java, I wrote kiosks, screen savers, and the plumbing for internet-connnected applications (like World Book Encyclopedia) in C/C++.

{% endcapture %}
{% include about-resume-item.liquid 
    employer="IBM" 
    title="Multimedia &amp; Web Programmer" 
    period="Sep 1995 - Sep 1998" 
    location="Atlanta, GA" 
    content=content %}

{% capture content %}

I was fortunately in the right place at the right time to land a job as the Technical Director for a CD-ROM-based, monthly gaming magazine. It was billed as, "the only gaming magazine that stays crispy in milk!" At the time, multimedia programming was a new tech, building on the recenly-introduced software-only video playback. Seeing the ultra HD streaming services of today, it's amazing how far we've come.

{% endcapture %}
{% include about-resume-item.liquid 
    employer="Interactive Entertainment" 
    title="Tech. Director" 
    period="Sep 1994 - Sep 1995" 
    location="Rochester, VT" 
    content=content %}

{% capture content %}

I was the senior developer on a for-profit arm of the university that was combining tech with their amazing group of content creators to make a CBT for high school and college-level Mathematics concepts.

{% endcapture %}
{% include about-resume-item.liquid 
    employer="University of Alabama" 
    title="Multimedia Programmer" 
    period="Sep 1992 - Sep 1994" 
    location="Tuscaloosa, AL" 
    content=content %}

{% capture content %}

My first professional programming gig found me working on applications that were much older than me. COBOL was the language of the job, but I was able to create several apps (including one for inventory management) in Pascal, backed by DBase.

{% endcapture %}
{% include about-resume-item.liquid 
    employer="U.S. Steel" 
    title="Programmer (Co-op)" 
    period="May 1991 - Sep 1992" 
    location="Fairfield, AL" 
    content=content %}

<!-- ---------------------- EDUCATION ---------------------- -->

{% include about-resume-section-header.liquid title="Education" %}


{% capture content %}

With a bit of professional experience in programming, and a new job at the U of A, I made the trek to Tuscaloosa to major in Computer Science with a minor in Mathematics. It was here that I met and married my much, much better half. After four years of college, I kept getting better and better jobs. I did not graduate. 

{% endcapture %}
{% include about-resume-item.liquid 
    employer="University of Alabama" 
    title="Computer Science maj.,<br/>Mathematics min." 
    period="Sep 1992 - May 1994" 
    location="Tuscaloosa, AL" 
    content=content %}

{% capture content %}

I graduated high school in 1990. I never planned to go to college. My parents didn't. Their parents didn't. But, I was able to land a music scholarship that would take me through my first two weeks as a Music major. I didn't really want to be a performer or a director, but I was pretty good at playing the trombone and baritone. Once on campus, I was offered a Math scholarship, so I immediately switched majors and selected Computer Science as my minor. In the first two years, I completed the senior level courses in the CS department and found that I had a passion for it. I moved on to the University of Alabama to major in CS and minor in Math. I did not graduate.

{% endcapture %}
{% include about-resume-item.liquid 
    employer="University of Montevallo" 
    title="Mathematics maj.,<br/>Computer Science min." 
    period="Sep 1990 - May 1992" 
    location="Montevallo, AL" 
    content=content %}

<!-- ---------------------- PUBLICATIONS ---------------------- -->

{% include about-resume-section-header.liquid title="Publications" %}


{% capture content %}

_XNA Game Studio Express: Developing Games for Windows and the Xbox 360_ is the ultimate resource for hobbyists and students who want to write games for Windows and the Xbox 360 game console. Learn how you can create your own games using these free game development tools and APIs from Microsoft, based on the incredibly popular Visual Studio IDE. You'll begin with an introduction to the XNA platform and the Game Studio Express development environment. From there, you'll examine many different game genres to develop your own working games from scratch. To get the most out of this unique guide you will need a working knowledge of programming, but readers with a variety of backgrounds will still benefit from the comprehensive coverage found inside.

{% endcapture %}
{% include about-resume-item.liquid 
    employer="XNA Game<br/>Studio Express" 
    title="Cengage" 
    period="May 2007" 
    location="800 pages" 
    content=content %}


{% capture content %}

_Fauxcabulary: Fake Definitions. Real Funny._ is a collection of terrible puns by a self-avowed word nerd. If you're looking for a humorous tome that you can pick up and put down on a whim, you need this title on the back of your toilet. The rules for this collection of puns are simple.
1. The words are real.
2. The definitions are fake.
3. The hilarity is optional.

{% endcapture %}
{% include about-resume-item.liquid 
    employer="Fauxcabulary" 
    title="Self-Published" 
    period="Aug 2014" 
    location="472 pages" 
    content=content %}


<!-- ---------------------- CERTIFICATIONS ---------------------- -->

{% include about-resume-section-header.liquid title="Certifications" %}


{% capture content %}

For my stint with eSA, where I worked on code for the Air Force, I needed Secret Clearance. In 2021, I had a similar background check run for my work on Veterans Affairs (va.gov) systems.

{% endcapture %}
{% include about-resume-item.liquid 
    employer="Secret Clearance" 
    title="" 
    period="Oct 2013 - Oct 2023" 
    location="" 
    content=content %}

{% capture content %}

At one point, I wanted to be a trainer of software developers in the corporate space. I obtained all my certifications through the MCT, but never actually taught a course. I did, however lead the training for several of my programming gigs, and I taught high school students how to program video games for several summers between 2011 and 2018.

{% endcapture %}
{% include about-resume-item.liquid 
    employer="MCSD .NET" 
    title="" 
    period="Oct 2015" 
    location="" 
    content=content %}


{% comment %}
<!-- ---------------------- Special Thanks ---------------------- -->

{% include about-resume-section-header.liquid title="Special Thanks" %}


{% capture content %}

Most of the icons on this site are works derived from assets found on The Noun Project. Their core belief is that visual language has the power to change the world. If you're looking for visual assets to represent the most generic or specific of concepts, visit their site. You'll find tons of high-quality icons and images for just about any topic.

{% endcapture %}
{% include about-resume-item.liquid 
    employer="Noun Project" 
    title="" 
    period="" 
    location="<a href='https://thenounproject.com/'>thenounproject.com</a>" 
    content=content %}

{% capture content %}

This content is hosted on GitHub Pages. They make it easy to create and host websites for you and your projects. Your content is hosted directly from your GitHub repository. Just edit, push, and your changes are live. It couldn't be easier.

{% endcapture %}
{% include about-resume-item.liquid 
    employer="GitHub Pages" 
    title="" 
    period="" 
    location="<a href='https://pages.github.com/'>pages.github.com</a>" 
    content=content %}

{% capture content %}

At its core, this content is powered by Jekyll &mdash; a tool that allows you to transform your plain text into static websites and blogs. You work in [GitHub-flavored Markdown (GFM)](https://github.github.com/gfm/) and Jekyll spits out the templated HTML that your site's visitors see.

{% endcapture %}
{% include about-resume-item.liquid 
    employer="Jekyll" 
    title="" 
    period="" 
    location="<a href='https://jekyllrb.com/'>jekyllrb.com</a>" 
    content=content %}

{% capture content %}

Jekyll is great at managing blogs and static pages, but sometimes you want a little more interaction, or you want to present content other than a blog post or landing page. That's where JekyllFaces comes in. It provides GitHub-Pages-friendly extensions to make managing content for your projects easier to promote and manage. **NOTE:** _This site uses a pre-release version of JekyllFaces since it's not quite ready for general use._

{% endcapture %}
{% include about-resume-item.liquid 
    employer="JekyllFaces" 
    title="" 
    period="" 
    location="<a href='http://jekyllfaces.com/'>jekyllfaces.com</a>" 
    content=content %}

{% capture content %}

Most of the initial content for this site was generated using Chat GPT-3. That initial text has long since been tweaked during a line-by-line review of the generated blurbs, but Chat GPT-3 is worth a mention since it serves as an expert in so many topics. The output makes for a great head start for your project, and the system is great for bouncing creative ideas around, or when trying to solve issues when you get a little stuck.

{% endcapture %}
{% include about-resume-item.liquid 
    employer="Chat GPT-3" 
    title="" 
    period="" 
    location="<a href='https://chat.openai.com/'>chat.openai.com</a>" 
    content=content %}

{% endcomment %}