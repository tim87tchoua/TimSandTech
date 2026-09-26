export type CourseLesson = {
  heading: string;
  subheadings: CourseLessonDetail[];
};

export type CourseLessonDetail = {
  heading: string;
  content: string;
  example: string;
  image?: string;
};

export type CourseAgendaSection = {
  heading: string;
  subheadings: CourseLessonDetail[];
};

export type CourseAgendaItem = string;

export type CourseModule = {
  id: number;
  title: string;
  category: string;
  duration: string;
  objective: string;
  agenda: CourseAgendaItem[];
  lessons: CourseLesson[];
};

export const courseModules: CourseModule[] = [
  {
    id: 1,
    title: "Fundamental security concepts",
    category: "Security Concepts, and controls",
    duration: "60 min",
    objective:
      "This module summarizes core security principles, control categories, and the responsibilities needed to build a resilient security posture.",
    agenda: ["Security concepts", "Security controls"],

    lessons: [
      {
        heading: "Security concepts",
        subheadings: [
          {
            heading: "Information security",
            content: [
              `What we're going to be talking about here is the CIA triad.`,
              `According to CompTIA, CIA is sometimes referred to as AIC. It's literally the same letters just in reverse. If you're in IT, especially if you're in security in IT, you will know what someone is talking about when they talk about the CIA triad.`,
              `Confidentiality could be something private. These could be medical records, your pay slip, your salary invoice. Confidential is for certain people's eyes only, authorized people only.`,
              `Confidentiality: information can only be viewed or read by people authorized to do so.`,
              `In IT, there is many ways we can achieve confidentiality, for example, put a private document in an envelope gives us confidentiality in real life, but it does not give us integrity because anybody can go tamper with it, and it does not have anything to do with availability.`,
              `Integrity in information technology ensures that data or communications are authentic, original, and free from unauthorized tampering, spoofing, or interception. Digital communications like emails can be spoofed by forged addresses, compromised by hackers taking over accounts, or intercepted and altered in transit. Just as physical contracts use handwritten signatures to prevent parties from altering terms without detection, digital documents require a mechanism to prove authenticity. Digital signatures and certificates serve the same purpose online as physical signatures in the real world. By applying a digital signature or encryption to emails and documents, recipients can verify that the sender is legitimate and that the contents have not been modified. If a signature is missing or invalid, it indicates the message may be fraudulent or tampered with.`,
              `Integrity: ensure data is authentic and original. Any changes are authorized.`,
              `Availability is basically just to ensure information is always accessible. So, if it's on a server, we want to make sure that server is highly available. There's two or more of the same servers giving us redundancy and fault tolerance. We want to make sure there's backup internet connections, backup hard drives. So, at the end of the day, whatever information you have and wherever it might be, it needs to always be available. That is availability.`,
              `Availability: Information is always accessible to those authorized to view it.`,
              `BitLocker encryption is used to encrypt the whole freaking hard drive, the whole volume on a computer, that will give us confidentiality because people won't be able to see the contents of your hard drive, but at the same time, it actually gives us integrity because nobody will be able to tamper with the contents of the hard drive.`,
            ].join("\n\n"),
            example:
              "A payroll service encrypts salary records for confidentiality, signs transactions so unauthorized changes can be detected for integrity, and uses redundant servers so authorized staff can access records during an outage.",
          },
          {
            heading: "Cybersecurity framework",
            content: [
              `When it comes to security, or more specifically the cybersecurity framework, we are constantly going to be in the battle to defend our networks because of attackers. The reason we will have those two terms is: defense and attacker.`,
              `To defend our infrastructure and our whole environment for our company, you will think of yourself as a white hat hacker, not a black hat hacker. White hat hackers need to be better than a normal hacker because you need to be able to protect your environment or your client. If you want to catch a criminal, you sometimes need to hire a criminal. So, you are not going to be criminals, but you need to be able to think like a hacker and you need to have the knowledge of a hacker to be able to protect your environment from hackers. Your job is going to be to defend, and you need to know what these bad guys are going to do when it comes to attacking your company.`,
              `Identify:`,
              `Identifying potential threats within your or a client's environment requires knowing available tools and methodologies. This process involves developing security policies and capabilities, evaluating risks, threats, and vulnerabilities, and recommending security controls to mitigate them. Client environments often limit your authority, restricting you to making recommendations and suggestions while your primary role is identification. Various advanced monitoring software and platforms are available to track networks, security, internet usage, and servers.`,
              `Splunk Enterprise Security: used for log aggregation, real-time threat detection, and security monitoring across networks and servers.`,
              `Wazuh: providing endpoint security, log analysis, integrity monitoring, and vulnerability detection.`,
              `Wireshark / tshark: packet analyzers used to capture, inspect, and troubleshoot network traffic in real time.`,
              `Microsoft Defender for Endpoint: a cloud-powered enterprise security platform for endpoint monitoring, threat detection, and automated response.`,
              `Microsoft Sentinel: a scalable, cloud-native SIEM and SOAR solution for intelligent security analytics across enterprise environments.`,
              `pfSense: an open-source firewall and routing platform equipped with traffic shaping, packet filtering, and network monitoring capabilities.`,
              `Sysmon (System Monitor): a Windows system service that logs deep system activity, such as process creations and network connections, to the Windows event log for advanced monitoring.`,
              `Protect:`,
              `Managing IT hardware and software assets involves developing, installing, operating, and decommissioning them with security as an embedded requirement at every stage of the operations lifecycle. This process includes installations like the monitoring software previously mentioned, where requirements range from securing the right license or subscription for cloud platforms to deploying physical hardware or software. In medium to large-sized companies, you can typically expect to install a physical firewall, whereas software-based firewalls are generally limited to small office/home office (SOHO) environments. Additional security measures deployed during this lifecycle include antivirus solutions and physical security controls like CCTV cameras, which all form part of installing, operating, and protecting organizational assets.`,
              `Detect:`,
              `Utilizing advanced monitoring software, CCTV, antivirus, and firewalls means performing ongoing, proactive monitoring, ensuring that control remains effective and capable of protecting against new threats. Security tools frequently trigger false alarms that turn out not to be real threats; however, having too many false alarms is always preferable to having no alarms go off during an actual breach.`,
              `Respond:`,
              `This is to identify, analyze, contain, and eradicate threats to systems and data security. One of the things we can use to respond is an antivirus, although antivirus can respond automatically. Some software only monitors, requiring manual action, while advanced platforms automate response. Microsoft 365, Azure, and AWS are cloud platforms offering built-in tools for both monitoring and threat response. Microsoft Sentinel (SCCN) and Intune are specialized tools used to actively take action and react to security incidents rather than just monitor them.`,
              `Recover:`,
              `When a threat successfully breaches your environment and causes damage, you must address how, when, and how long it takes to recover. Companies should maintain daily, weekly, monthly, and off-site backups. Ransomware threats can lie dormant for days, weeks, or months to encrypt local network backups, making isolated off-site backups essential despite being expensive and constrained by company budgets. Under the NIST framework, recover involves implementing cybersecurity resilience to restore systems and data if controls fail to prevent attacks, providing a vital contingency plan when firewalls, antivirus, and other defenses fail.`,
              `Regarding this cybersecurity framework, information security and cybersecurity tasks can be classified as five functions: identify, protect, detect, respond, and recover. Those are the five functions. The following framework was developed by the National Institute of Standards and Technology (NIST).`,
              `How this works?`,
              `At the top, we'll normally put identify, which is to develop your policies and get your monitoring in place. Right below that, you'll put your protect function, which is to implement the security, your antivirus, and all that. Below protect, you'll find the other three remaining functions, which are detect, respond, and recover.`,
              `Attackers strike from the front or bottom of an organization's environment, where detect, respond, and recover functions directly deal with incoming threats. Conversely, defense originates from the top and back, beginning with identify and flowing downward through protect and the remaining operational functions.`,
            ].join("\n\n"),
            image: "/img1.png",
            example:
              "A SOC can identify suspicious traffic, apply protection measures such as firewall rules, detect malicious behavior, and coordinate a response and recovery plan.",
          },
          {
            heading: "Access control",
            content: [
              `It's to control access, who can access what, when and where.`,
              `There are four main things you need to know when we talk about access control:`,
              `Identification:`,
              `Identifying who is who and what is what is normally handled through identities. Under identification, the system owner-which is what you will be in most cases-confirms a user's identity and creates an account to represent them. In an on-premises company environment, this is typically done using an Active Directory environment, where you or another administrator creates an account that the user utilizes to log in, identify themselves, and determine their level of access (privilege). Nowadays, this process extends well beyond on-premises infrastructure. With modern reliance on platforms like Microsoft Azure and 365, user accounts are frequently created in the cloud rather than on-premises, utilizing cloud-based Active Directory accounts among many other identity types.`,
              `Authentication:`,
              `is to check if someone is who they claim to be or what they claim to be. This is obviously done using identities. So, a user, in this case, would be normally need to provide something like a username and an email address combined with a password. This could potentially be a fingerprint, a retina eye scan, it could be voice recognition, face recognition, it could be a smart card. The point here is the user, which may or may not be you, might be a client or a user of yours, they will need to now prove they are who they claim to be. Otherwise, they can't gain access to this account or this device. So, authentication is to prove you are who you claim to be, or in some rare cases, what you claim to be because sometimes a server or something like a server needs to authenticate to another server.`,
              `Authorization:`,
              `is to check what level of access somebody or something has once they have authenticated. So, you can think of this as a domain account on premises. So, once somebody has logged in, it's going to check what permissions, what privilege that individual has on their account. So, it might be, "Oh, this is an administrator." He or she's got full access. Or, "Oh, this is a manager." They've got a lot of access. They can see all the following departments. Or, "Oh, this is just a trainer, you will expect them to only have access to things like slides, manuals, exams, and course material. So, depending on who you are, what department you work in, and all that, that will determine what level of access you've got, which we refer to as privilege or permissions. Now, this does not always take place. If you log into something like a Facebook account, a Gmail account, anything like that, or even your own personal laptop, you probably have full outright access. So, authorization doesn't really take place there. But, if you look at something like a domain environment, which is a very good example for this, authorization does kick in. It is going to check what level of access you or the user has. So, for authorization, we can say for each action the account performs, a permission list is checked to allow or deny the action the user wants to go do.`,
              `Accounting:`,
              `Systems track permission usage through logs, ensuring that users cannot prevent auditing. With on-premises setups, personal laptops, desktops, phones, tablets, and online platforms, virtually everything is tracked and logged. Hackers often physically destroy or "burn" their PCs to avoid getting caught because data can almost always be recovered, even after permanent deletion or hard drive formatting, we call it Forensic Recovery`,
            ].join("\n\n"),
            example:
              "An employee is identified by an account, authenticates with a password and MFA, receives permissions for their role, and has account activity logged for audit.",
          },
        ],
      },
      {
        heading: "Security controls",
        subheadings: [
          {
            heading: "Security control categories",
            content:
              [
                `Managerial: So, this is normally somebody's in charge, some sort of manager. Could be a general manager, could be an IT manager. Generally, managers need to know who is doing what. They need to know what's going on in general in the company, or at least in their respective department. So, this is to give oversight of a system, or in some cases, a department. Regarding this managerial a couple of examples would be to include risk identification, or a tool allowing evaluation and selection of other security controls.`,
                `Operational: the control is implemented primarily by people. For example, security guards and training programs are operational controls. So those are a couple of examples. So, what we can say here is operational relies on a person for implementation.`,
                `Technical: is implemented as a system. These will be things like hardware, software, or firmware. For example, firewalls, antivirus software, and operating system access control models are technical control examples. So, in other words, it is implemented in operating systems, software, and security appliances because something like a firewall is an appliance. Yes, you get firewalls like the Windows firewall, and firewalls you can go and buy and install, but in a proper medium to large-sized company, a firewall is normally an actual physical device, a security appliance. And let me tell you, they do not come cheap. Very, very expensive. You get many brands, many models, and depending on how much money you throw at it that will dictate how many functions you've got and how many people that you actually handle.`,
                `Physical: these are devices that mediate access to premises and hardware. Physical controls such as alarms, gateways, locks, lighting, and security cameras that deter and detect access to premises and hardware, they're often placed in a separate category to technical controls.`,
              ].join("\n\n"),
            example:
              "A firewall is a technical control, a guard is an operational control, a lock is a physical control, and a risk review is a managerial control.",
          },
          {
            heading: "Security control types: classified functionally as preventative, detective, or corrective",
            content:
              [
                `Security control types are classified functionally as preventative, detective, or corrective. You get things like administrative controls, technical controls, and physical controls. Now with each of these, you get three subcategories, if I can call it that. You get preventative, detective, and corrective.`,
                `Administrative controls`,
                `If we look under preventative, this could be things like:
- Hiring and termination policies.
- Separation of duties: who's doing what, and what are your duties and responsibilities in the company.
- Data classification to classify your data correctly and categorize it so people know what to find, where to find it, who is responsible, and all that kind of thing.`,
                `If we look at the detective section under administrative controls, this will be things like:
- Reviewing access rights. Who has access to what? Should they still have access to that, or do they not have enough access for their responsibilities?
- Audit logs and unauthorized changes.`,
                `Under the corrective section of administrative controls, this can be things like:
- Implementing a business continuity plan. In the event of something going sideways, what is plan B? How quickly can you be up and running, and will you be offline, if offline at all? Ideally, you want to have all systems running nonstop, even though something might have gone wrong in the background.
- Having an incident response plan. In the event of something going sideways, what is plan B? Do you have backups in place, backup servers, backup internet, and backup technicians? You need fault tolerance and high redundancy.`,
                `Technical controls`,
                `Under technical controls, preventative examples include firewalls, IPS, MFA, and antivirus.`,
                `Under detective technical controls, examples include IDS (intrusion detection systems) and honeypots.`,
                `Under corrective technical controls, examples include:
- Vulnerability patching to prevent someone from exploiting a vulnerability.
- Rebooting a system so updates and patches can take effect.
- Quarantining a virus or other malware.`,
                `Physical controls`,
                `Physical controls are usually things you can see and touch. Preventative examples include a fence, a gate, and a lock.`,
                `Detective physical controls include CCTV and surveillance cameras, which detect whether someone is up to something rather than necessarily preventing it.`,
                `Corrective physical controls include repairing physical damage and reissuing access cards. For example, if someone needs a card to enter a certain section of a building or business, reissuing a physical card to that individual, user, or employee is corrective under physical controls.`,
              ].join("\n\n"),
            example:
              "An organization prevents incidents with hiring policies, firewalls, and locks; detects problems through access reviews, IDS, and CCTV; then corrects them with incident-response plans, patching, and physical repairs.",
          },
          
          {
            heading: "Security control types: classified as scenarios",
            content:
              [
                `While most controls can be classed functionally as preventative, detective, or corrective, a few other types can be used to define other cases. Here are a couple of unusual scenarios.`,
                `Directive: A directive security control directs users into a certain kind of behavior and enforces a rule of behavior. This could be a policy that blocks users from doing certain things or encourages certain behavior. It could also be best-practice standards: a preferred way for your company or client's company to do things, even when it is not required by law or other rules. Another example is a standard operating procedure (SOP). Most companies have SOPs, sometimes different ones for each department, that explain a person's responsibilities. For example, an IT trainer's SOP might be to help students pass the exam, make sure they understand the objectives, record attendance, and issue attendance certificates. Employee contracts may also explain disciplinary procedures and consequences for not following required procedures.`,
                `Deterrent: This control psychologically discourages intrusions. It may not physically or logically prevent access, but it can discourage an attacker from attempting an intrusion. For example, burglar bars discourage someone from entering through a window, and visible security or motion-detection cameras may discourage someone from committing a crime. Signs warning of legal penalties for trespassing and signs warning of speeding cameras can also discourage unwanted behavior. The control does not outright stop someone; it aims to discourage bad behavior and encourage good behavior.`,
                `Compensating: A compensating control is a substitute for a principal control, as recommended by security standards. It affords the same level of protection but uses a different methodology or technology.`,
                `Cybersecurity controls are broadly specified in seven categories:
- Directive controls
- Deterrent controls
- Preventative controls
- Compensating controls
- Detective controls
- Corrective controls
- Recovery controls`,
                `Directive controls are mandatory controls implemented to monitor regulations. They provide guidance primarily aligned with the organization's policies and regulations.`,
                `Deterrent controls discourage violations of security functions and help reduce the chances of a deliberate attack. They help people make informed decisions and discourage insecure behavior.`,
                `Preventative controls are used to prevent or avoid security incidents in the organization. They help mitigate unauthorized activities through preventative methods.`,
                `Compensating controls are alternative methods that support the requirements of the actual security controls implemented. Their role is to provide a similar level of assurance even if an attacker has compromised the actual security control.`,
                `Detective controls detect and alert on unauthorized or unwanted activities within the organization. They help detect and react to security violations using tools, processes, and best practices.`,
                `Corrective controls remediate or mitigate the effects of a security incident. They include measures to mitigate an incident and prevent it from reoccurring. A solution should not be implemented only for the same incident to happen again the next day.`,
                `Recovery controls restore the operating system to normal condition after a security incident. This could be a backup or built-in Windows functions such as Refresh and Reset. If a client or server machine breaks, System Restore may help, although it is limited to client operating systems. For a virtual machine, snapshots (now often called checkpoints) can restore the whole machine to an earlier state, rather than only restoring the system as System Restore does.`,
              ].join("\n\n"),
            example:
              "An SOP directs employees, warning signs deter trespassing, MFA prevents unauthorized logins, a staffed guard compensates when badge readers are unavailable, IDS detects attacks, patching corrects vulnerabilities, and backups recover data.",
          },
          {
            heading: "Information Security roles and responsibilities. ",
            content:
              [
                `A security policy is a formalized guideline defining how an organization implements security to protect the confidentiality, availability, and integrity of system data and resources, supporting the CIA triad. Policies vary widely based on the company's industry, country, and operations (for example, a bank versus a school or manufacturer), and explicitly outline what employees are and are not allowed to do. IT teams can provide tools and policies, but they cannot force compliance. Ultimate security relies on end users following basic protocols, such as not sharing passwords, keeping PCs updated, and avoiding suspicious email attachments or links.`,
                `Overall responsibility: The Chief Information Officer (CIO) has overall responsibility and may also have direct responsibility for security. Some organizations appoint a Chief Technology Officer (CTO), with more specific responsibility for ensuring effective use of new and emerging IT products and solutions to achieve business goals. In large organizations, security responsibility may be allocated to a dedicated department run by a Chief Security Officer (CSO) or Chief Information Security Officer (CISO).`,
                `Managerial: Managers may be responsible for a domain such as building control, web services, or accounting. Managers have a level of responsibility even if they are not IT managers.`,
                `Technical: Technical and specialist staff are responsible for implementing, maintaining, and monitoring the policy. Security may be a core competency of systems and network administrators, or there may be dedicated security administrators. One such job title is Information Systems Security Officer (ISSO).`,
                `Non-technical: Non-technical staff, the organization's everyday users, are responsible for complying with policy and relevant legislation. They must follow security guidance, such as not clicking suspicious links or opening suspicious attachments.`,
                `Due care/liability: This is external responsibility for security and lies mainly with directors or owners. However, all employees share some measurable responsibility. Whether someone is an owner, a director, works in security, or is an everyday user, they need to do their part. Even strong security technology cannot prevent ransomware if staff have not been trained to avoid suspicious links.`,
              ].join("\n\n"),
            example:
              "A company assigns overall security oversight to the CIO or CISO, domain responsibilities to managers, policy implementation to technical staff, and policy compliance to all users, while directors retain due-care responsibility.",
          },
          {
            heading: "Information security competencies. ",
            content:
              [
                `Working in corporate cybersecurity requires broad competency across multiple domains. Students preparing for the Security+ certification should also familiarize themselves with foundational concepts like Network+, as having a networking background or certification is crucial for success. You cannot protect what you do not understand: just as you cannot secure a network without knowing networking, you cannot enter risk management without understanding risk management.`,
                `You need to participate in risk assessments and the testing of security assessments, and be able to make security recommendations. To make recommendations to your company or your client's company, you need to understand security and risk assessment.`,
                `You need to specify, source, install, and configure secure devices and software.`,
                `You need to set up and maintain document access control and user privilege profiles.`,
                `You need to monitor audit logs, review user privileges, and document access controls. Employees often retain temporary or unnecessary access rights after a task is completed because technicians forget to revoke them. IT security relies on the golden rule of ensuring users have only the bare minimum access required to do their jobs. You cannot rely on users to report their own over-provisioned access, either because they enjoy the extra capability or do not realize they should not have it. Specialized tools are needed to actively audit and manage permissions.`,
                `You need to manage security-related incident response and reporting. If a malware attack, hack, or breach occurs, you need to know how to handle it.`,
                `You need to create and test business continuity and disaster recovery plans and procurement. If there is a failure, a solution should keep the business up and running. If downtime is unavoidable, it should be minimal, and the business should be restored as quickly as possible.`,
                `You need to actively participate in security training and education programs. This can be as simple as emailing users reminders not to open mail from people they do not know. Users may not absorb the information the first time, so continued communication is important.`,
              ].join("\n\n"),
            example:
              "A security analyst assesses risk, recommends controls, configures systems with least-privilege accounts, reviews audit logs, coordinates incident response, tests recovery plans, and trains staff.",
          },
          {
            heading: "Information Security Business Units. ",
            content:
              [
                `Information security business units represent the security function within the organizational hierarchy.`,
                `Security Operations Center (SOC): A location where security professionals monitor and protect critical information assets across business functions such as finance, operations, sales, and marketing. Because a SOC can be difficult to establish, maintain, and finance, it is usually employed by larger organizations, such as government agencies or healthcare companies.`,
                `How does this work if you may or may not work for a big company? An IT department might be outsourced to a third party. Many big and small companies have no in-house IT or only minimal in-house IT. When they need technical expertise, they log a ticket or job card with a third-party company for assistance. That work can range from selling products such as PCs or network cables, to providing remote or on-site engineering, recommendations, mitigations, hard-drive replacements, server-room builds, and security solutions. In an outsourced scenario, the third-party provider is the organization delivering that support.`,
                `DevSecOps: Bridges the gap between development and operations teams to build, test, and release software faster and more reliably. Security is integrated from the earliest planning and requirements stages rather than being added at the end. Security operations and tools are automated through code, requiring security teams to adopt developer expertise to improve threat detection and monitoring.`,
                `Incident response: Generally handled by a dedicated Computer Incident Response Team (CIRT), which acts as a single point of contact for reporting security incidents. This function might be handled by the SOC or established as an independent business unit. A SOC might be outsourced or operated in-house.`,
              ].join("\n\n"),
            example:
              "A large company uses a SOC to monitor business systems, a CIRT to coordinate breach response, and DevSecOps to integrate security testing into software releases; a smaller firm may outsource IT or SOC support.",
          },
      
    ],
  },
    ],
  },
  {
    id: 2,
    title: "Comparing threat types",
    category: "Threat Actors, Attack Surfaces and Social Engineering",
    duration: "90 min",
    objective:
      "Compare and contrast attributes and motivations of threat actor types, and explain common threat vectors and attack surfaces.",
    agenda: ["Threat Actors", "Attack surface", "Social Engineering"],
    lessons: [
      {
        heading: "Threat Actors",
        subheadings: [
          {
            heading: "Vulnerability, Threats, and Risk",
            content: [
              `Something a lot of people don't necessarily realize is that vulnerability + threat = risk.`,
              `For that to make sense, we need to dive deeper into each of these pieces one by one.`,
              `Starting with vulnerability, what is that? Generally, it's some sort of weakness in your company or your client's company. Vulnerability is a weakness that could be triggered accidentally or exploited intentionally to cause a security breach. This isn't just limited to IT—it extends well beyond the borders of technology into real life. Whether it's an IT company or not, someone or something (usually a person) can abuse that vulnerability to gain access, break something, or just do something malicious.`,
              `If you don't have much security in your company, that's a vulnerability. If you don't have antivirus software, or if your antivirus isn't up to date, that's a vulnerability. If you have a firewall, but it's a poor firewall, turned off, or has open ports, that's a vulnerability. Someone or something can take advantage of that weakness to do harm.`,
              `Next, what about threats? A threat is the potential for someone or something to exploit a vulnerability and breach security. In other words, what are the chances of someone actually doing that? We already know vulnerability is a weakness. A threat is basically the statistical probability of that weakness being acted upon. As long as the weakness is there, it's a threat. If your firewall is turned off, it doesn't mean a breach will happen immediately, but as long as it's off, it's both a vulnerability and a threat, because at any point—whether right now, tomorrow, or a year from now—someone could take advantage of it. A threat is simply the odds of someone taking advantage of that known weakness.`,
              `So, we know that vulnerability plus threat equals risk. But what is risk? Risk is the level of hazard posed by those vulnerabilities and threats combined. Let's say we have a weakness, and the chances of someone exploiting it are very high. If someone does exploit it, what is the impact on the company? Is it a situation where you just shrug your shoulders and say, "tough bananas," or is it a severe emergency? What hazard does it pose to you or your client's company? Can it cause financial loss? Can it cause damage, like your backups kicking the bucket, servers crashing, or losing critical data?`,
              `If the risk is minimal, people usually aren't in a rush to patch vulnerability. But if the risk is high, you'll see people scramble to patch that hole very quickly. For example, imagine Microsoft Windows has a brand-spanning-new vulnerability discovered in its operating system. As long as that unpatched hole sits there, it's a vulnerability, and because bad actors could discover and use it, it's a threat. But what risk does it pose? Can an attacker take total control of the machine, or view sensitive financial data? Or is the risk minor, like someone just messing with some settings? That potential impact is risk.`,
            ].join("\n\n"),
            example:
              "An internet-facing server with an unpatched flaw has a vulnerability; attackers who could exploit it present a threat; the chance of a breach and the resulting data loss determine the risk.",
          },
          {
            heading: "Attributes of Threat Actors",
            content: [
              `Known Threats vs. Adversary Behaviors

The security landscape has completely transformed over the years. In the past, dealing with malware and perpetrators was relatively straightforward. Security systems primarily scanned for known signatures—such as classic viruses, Trojan horses, and ransomware.`,
              `Today, traditional signature-based detection is no longer enough. Modern platforms like Microsoft 365 and Azure incorporate sophisticated monitoring tools that go beyond static signatures to analyze behavior and anomalies. For instance, if a user suddenly attempts to log in at irregular hours, from an unfamiliar device, or from a new geographic location, the system flags it as suspicious. While this might simply mean the user is traveling, it is always safer to investigate a false positive than to miss a real breach. Security teams can verify these events quickly—such as messaging the user to confirm whether they just signed in. If they confirm, it is cleared as legitimate; if they say otherwise, it serves as an immediate red flag requiring instant intervention.`,
              `Internal vs. External Threats

Threats can originate from either inside or outside an organization:

- Internal Threats: These typically come from individuals who currently work—or very recently worked—for the company, including current employees, contractors, consultants, or business partners. Because they already possess authorized access, they sit behind the corporate firewall and present a unique challenge. This is why enforcing the principle of least privilege is vital: it limits what internal users can see and do, helping contain the damage if an account is compromised or an employee goes rogue. Note that an internal threat does not necessarily mean the attacker is physically inside the building; an employee working remotely from home using corporate access is still evaluated as an internal risk vector.
- External Threats: These originate from outsiders who do not work for the organization and lack initial authorized access. They must work their way through exterior defenses like firewalls and perimeter controls, making their initial entry generally more difficult.`,
              `Threat Actor Capabilities and Resources

Adversaries vary drastically in their skill levels, tools, and backing:

- Low-Capability Actors: Often referred to as "wannabe hackers," these solo actors possess minimal experience and rely on commodity tools found online. While they lack advanced skills, they can still cause disruptions.
- High-Capability Actors: Highly skilled professionals who do not rely solely on pre-packaged tools. They can develop custom exploits, write new codes, and engineer novel attack vectors.
- Organized Groups and State-Sponsored Actors: While low-capability actors usually work alone, high-capability actors frequently operate in structured groups with specialized roles (such as coders, social engineers, and phishers). Furthermore, some of these groups are backed by substantial resources, funding, and support from political parties, military entities, or entire nation-states—particularly during geopolitical conflicts.`,
            ].join("\n\n"),
            example:
              "A remote employee is an internal threat because they have authorized corporate access, while an unknown outsider probing the public firewall is an external threat; an unusual login from either should be investigated.",
          },
          {
            heading: "Motivations of Threat Actors",
            content: [
              `B- Motivations of Threat Actors

When examining why bad actors—often called black hat hackers—do what they do, we are looking at their intent and motivation. Attacks can range from accidental to entirely intentional.`,
              `Maliciously targeted vs. Opportunistic Intent

- Maliciously Targeted: In most cases, attacks are deliberate and carefully planned. The threat actor specifically chooses a target with malicious intent, mapping out their approach in advance.
- Opportunistic: Sometimes, attackers aren't targeting a specific victim from the start. They simply stumble across a wide-open vulnerability, spot an easy opportunity, and decide to exploit it on the spot.
- Accidental (Unintentional): Very rarely, a security breach or system compromise can happen completely by accident. While uncommon—especially in tightly secured environments—unintentional actions can sometimes trigger unintended security incidents.`,
              `Underlying Motivations

What drives threat actors to carry out these attacks? The most common motivations include:

- Greed: Financial gain is one of the most widespread drivers in the cybercriminal underworld, fueling everything from ransomware to data theft.
- Curiosity: Not all hacks are driven by money. Some threat actors breach systems purely out of curiosity—they want to see how a system works, what data is inside, or if they can pull it off just to see if it's possible.
- Revenge: Highly skilled individuals with technical backgrounds may use their abilities to retaliate against an employer, organization, or individual who wronged them. As the saying goes, it is never a good idea to tick off a skilled hacker.`,
              `Sometimes, an accidental breach happens when someone stumbles past a security mechanism and thinks, "Oh shucks, whoopsie daisy, I didn't mean to do that!"`,
              `Moving on to the strategies of these black-hat attackers, how do they plan to go about their attacks? One common strategy is service disruption, which means preventing an organization from operating normally. This could involve knocking out a company's website or deploying malware to block access to employee workstations.`,
              `Service disruption can be an end in itself if the threat actor's goal is to sow chaos or seek revenge. For instance, a disgruntled ex-employee who was denied a promotion, salary increase, or bonus might want payback against the company. Some people just want to create chaos for the sake of chaos; they don't even have a solid reason behind it.`,
              `Historically, especially 20 or 30 years ago, many hackers didn't act for financial gain or revenge; they did it purely for the chaos and thrill. Their ultimate goal was often just to hear their names mentioned on the news and get their name out there as if playing a game. Today, however, that trend has simmered down. Modern attacks are much more commonly driven by financial gain (greed), curiosity, or plain old revenge, with service disruption typically serving as a tool for payback.`,
              `Other times, a perpetrator's strategy might be data exfiltration. This involves transferring or copying valuable information from a computer or network without authorization. A threat actor might perform this type of attack because they want the data asset for themselves, plan to use the loss of data as blackmail, or intend to sell it to the highest bidder.`,
              `The third strategy employed by bad actors is to falsify trusted resources, a tactic known as disinformation. This can include changing the content of a website, taking legitimate information and altering it to mislead the public for personal or political gain. It can also involve manipulating search engines to inject fake sites or using bots to post false information on social media platforms. You will see this frequently on Facebook, TikTok, Instagram, and Twitter (which is now called X).`,
              `There is a massive amount of fake information spread online by malicious individuals, political parties, governments, or even entities targeting a specific company or person. Because of this, you should never believe the first thing you see online. Always verify information using a known, trusted source. A video or post on TikTok, Facebook, Instagram, or X does not mean something is true just because it appears there.`,
              `Hacker Motivations: Chaos and Financial Gain

As touched earlier, the motivations behind these attacks can sometimes be purely chaotic. In the early days of the internet, many service disruptions and disinformation attacks were carried out simply to cause chaos. Hackers might deface websites, release internal data, or bring corporate networks to a standstill for no other reason than to gain credit for the hack and get their name out there.`,
              `Just like a villain in a movie who commits crimes simply to see their name splashed across the news headlines, some hackers operate purely for notoriety. They want recognition for their individual handle or their hacker group.`,
              `However, financial gain is now one of the primary drivers for modern threat actors. As hacking tools and malware became more sophisticated and commodified, the opportunities for financial profit exploded. Today, if an attacker successfully steals data, they might sell it to third parties, extort the victim through blackmail, or carry out direct financial fraud.`,
              `Blackmail involves demanding payment to prevent the release of sensitive information. Typically, attackers obtain confidential data about a person or company and use it to extort financial gain.`,
              `Extortion is very similar, often demanding payment to prevent or halt an active attack. A prime example of this is ransomware, where attackers lock down files and demand a large payout—often from corporations or government agencies—threatening to leak sensitive customer and user data if their demands are ignored.`,
              `Fraud takes many forms, but in a security context, it involves falsifying records. Internal fraud might include tampering with accounts to embezzle funds or misusing customer details to launder money.`,
              `Finally, another major driver is political motivation. This category is broad and covers numerous subcategories where a black hat hacker uses an attack to bring about change in society or governance. Examples include:

- An employee acting as a whistleblower due to ethical concerns over an organization's behavior.
- An activist campaign group disrupting the services of an organization whose actions contradict their philosophical or ethical beliefs.
- A nation-state actor utilizing service disruption, data exfiltration, or disinformation against a foreign government or corporation to achieve strategic or wartime objectives.`,
              `While politicians project a polished image on television to win votes, the behind-the-scenes reality of what political entities and state-sponsored groups do in the shadows can be truly unsettling.`,
            ].join("\n\n"),
            example:
              "A financially motivated group encrypts a company's files and threatens to publish stolen customer data unless it is paid; this combines service disruption, data exfiltration, and extortion.",
          },
          {
            heading: "Hackers and Hacktivists",
            content: [
              `C- Hackers and Hacktivists

The “Lone Hacker”

The term hacker describes an individual who has the skills to gain access to computer systems through unauthorized or unapproved means. However, the original meaning of the word was actually quite neutral. Many years ago, a hacker was simply a user who excelled at computer programming and systems administration, someone very skilled with computers, but not necessarily up to no good.`,
              `Back then, successfully hacking into a system was viewed as a sign of technical skill and creative problem-solving. Over time, that meaning shifted to become associated with illegal and malicious system intrusions. Today, we distinguish motivations using the terms unauthorized (black hat) and authorized (white hat):

- White Hat Hacker: An authorized professional who has explicit permission to perform penetration testing and secure private systems.
- Black Hat Hacker: An unauthorized bad actor who breaks into systems without permission to cause harm or gain illicit access.`,
              `Unskilled Attackers

An unskilled attacker is someone who uses hacker tools without truly understanding how they work or having the capability to craft new attacks. Often referred to as "wannabe hackers," or “Script kiddies” they typically lack specific goals or technical depth, seeking attention or a quick thrill to prove abilities they do not actually possess.`,
              `Ironically, many of the pre-packaged "hacker tools" these novices download online actually contain hidden Trojan horses that end up infecting their own machines. Unlike true-blue hackers—who possess deep technical skills, write their own code, and rarely care about public applause, unskilled attackers rely almost entirely on downloaded scripts and outside guidance.`,
              `Hacker Teams and Hacktivists

While the classic image of a hacker is a solitary figure working with few resources, modern threats frequently involve collaborative hacker teams. Skilled operators often partner with peers of equal or complementary expertise, pooling their resources to develop sophisticated tools and novel attack strategies far quicker than any individual could manage.`,
              `A prominent evolution of this collaborative approach is the hacktivist group. Well-known examples include groups like Anonymous, WikiLeaks, and LulzSec. Hacktivists use cyber weapons to promote a political agenda or serve their own brand of justice. They frequently employ:

- Data exfiltration to steal and release confidential information into the public domain.
- Service disruption or website defacement to spread disinformation.`,
              `While organizations in media, politics, and finance face the highest risk of being targeted by hacktivists, environmental and animal advocacy groups may also target companies across various industries. While some hacktivist groups operate with chaotic intentions, many operate under the banner of seeking justice against perceived corruption or wrongdoing.`,
            ].join("\n\n"),
            example:
              "An authorized white hat tester reports a vulnerability to the organization, while an unauthorized hacktivist group defaces its website to publicize a political message.",
          },
          {
            heading: "Nation-State Actors and Advanced Persistent Threats",
            content: [
              `D- Nation-State Actors and Advanced Persistent Threats (APTs)

Nation-State Actors

A nation-state actor is essentially a hacker employed directly by a government, political party, or state entity. Rather than acting as a lone hacker or a random independent group, these individuals are typically attached to military or secret services and possess an exceptionally high level of cybersecurity capability.`,
              `When countries have geopolitical beef with one another, governments frequently employ these actors to operate in the shadows because it provides plausible deniability. By keeping them at arm's length, the sponsoring government can claim they are not officially involved. During times of war—or even when countries want to interfere without triggering direct military conflicts—governments will sponsor and fund these elite groups. They often pose as independent hacker groups or even fake hacktivists and may sometimes wage false-flag disinformation campaigns designed to implicate rival countries.`,
              `Over the years, nation-state actors have been implicated in major attacks targeting critical infrastructure, including:

- Energy systems
- Healthcare networks
- Electoral and voting systems

Their primary goals are usually espionage and disinformation to secure a strategic advantage, though they may also target corporations or seek financial gain.`,
              `Advanced Persistent Threats (APTs)

The term Advanced Persistent Threat (APT) describes the behavior and methodology underpinning modern, sophisticated cyber adversaries. Rather than a simple once-off malware infection like a traditional virus or Trojan horse from the old days, an APT refers to an adversary's ability to establish and maintain an ongoing, continuous compromise of a network's security. Once inside, these actors typically install backdoors or deep-rooted mechanisms to retain long-term access, allowing them to lurk undetected for months or years. Defending against an APT is exceptionally difficult; it requires more than just a standard firewall—especially since expensive physical firewalls are only as effective as the engineers configuring them. Organizations must deploy advanced monitoring tools, log collection platforms, and security operations teams to immediately spot anomalies and cut off persistent backdoors before severe damage occurs.`,
            ].join("\n\n"),
            example:
              "A government-backed group compromises an energy provider, installs a backdoor to maintain long-term access, and hides its activity among normal network traffic while collecting intelligence.",
          },
          {
            heading: "Organized Crime and Competitors",
            content: [
              `E- Organized Crime and Competitors

In many countries, cybercrime has officially surpassed physical crimes in terms of both the total number of incidents and overall financial losses—staggering statistics to consider.`,
              `Organized Crime and Jurisdiction

Organized crime syndicates often operate across the internet from entirely different legal jurisdictions than their victims, which drastically increases the complexity of law enforcement and prosecution. Criminals constantly seek profit opportunities through activities like financial fraud (targeting both individuals and companies) alongside traditional blackmail and extortion. These organized crime groups are typically very well-funded and possess significant resources and high technical capabilities. This makes them much harder to take down than a lone hacker, and in some cases, these criminal groups may even receive backing from state entities.`,
              `Corporate Espionage and Competitor Attacks

While most cyber espionage is traditionally associated with nation-state actors, rogue businesses also engage in corporate espionage against their competitors to gain a strategic advantage. If Company A wants an edge over Company B, they might hire an external cyber group to disrupt competitor systems, steal trade secrets, damage their reputation, or spread damaging disinformation.`,
              `These competitor attacks are frequently facilitated by insiders' employees who change companies and bring valuable internal knowledge with them.

- The "Inside Man": In some scenarios, an individual might join a company strictly as a corporate spy from day one, going through the standard interview and hiring process just to infiltrate the organization.
- The Departing Employee: A more common scenario involves a legitimate employee who leaves to join a competitor and hands over trade secrets, client lists, or sensitive business processes.`,
              `To protect against this, most companies require employees to sign a non-disclosure agreement (NDA). If an employee breaks an NDA after moving to a competitor, they face severe legal consequences and can be sued. While professional ethics keep most people honest, NDAs provide companies with a critical legal safeguard to hold individuals accountable.`,
            ].join("\n\n"),
            example:
              "A departing employee gives a competitor confidential client lists in violation of an NDA, while the competitor uses the information to target the former employer's customers.",
          },
          {
            heading: "Internal Threats",
            content: [
              `F- Internal Threats

Malicious Internal Threats

While unintentional mistakes happen, a malicious internal threat involves deliberate, planned actions by individuals who currently have or previously had authorized access.`,
              `- Disgruntled Employees: A current or recently departed employee who feels aggrieved (such as being denied a promotion, salary increase, or bonus) may go rogue to sabotage the company or steal sensitive information for financial gain or revenge. Because departing employees pose a major sabotage risk, many organizations revoke access immediately or even pay out a final month's salary to have them leave early rather than keeping a high-risk user inside the environment.
- The Principle of Least Privilege: This underscores why organizations enforce the golden rule of IT security: least privilege. By never giving users more access than necessary to perform their specific tasks, security teams can limit and contain the damage if an account is compromised or an insider turns malicious.
- Espionage and Business Advantage: Insiders might also act as spies for competitors from day one or accept outside offers to hand over trade secrets, client data, or intellectual property in exchange for financial gain.`,
              `Unintentional Internal Threats and Human Error

Not all internal threats are malicious; many stem from innocent mistakes, oversights, or lack of awareness:

- Weak Policies and Procedures: This occurs when security policies (such as data loss prevention, password rules, or archiving guidelines) are nonexistent, poorly defined, or improperly configured. Physical security lapses like tailgating, where someone holds a door open for an unauthenticated visitor instead of requiring them to badge in, also fall into this category. Furthermore, even when policies exist, poor policy adherence among employees (such as using company computers for risky personal browsing or unauthorized file downloads) can inadvertently introduce malware into the corporate network.
- Lack of Training and Security Awareness: Often considered one of the most dangerous vulnerabilities in any organization, a lack of employee training leaves the human element exposed. Because "users are the weakest link," security teams must educate staff on spotting phishing emails, malicious attachments, and social engineering. While mass email reminders are often ignored, physical boardroom sessions or mandatory interactive virtual training help ensure higher compliance.
- Shadow IT: This refers to the use of unsanctioned, unapproved IT equipment within an organization—such as employees bringing their own personal laptops, tablets, phones, or unauthorized wireless routers into the office. Because the IT department hasn't vetted, secured, or configured these devices, they create blind spots and introduce significant security risks to the corporate network.`,
            ].join("\n\n"),
            example:
              "A departing employee with excessive privileges copies client records before leaving, while an untrained colleague separately installs an unapproved router that exposes the office network.",
          },
        ],
      },
      {
        heading: "Attack surface",
        subheadings: [
          {
            heading: "Attack Surface and Vectors",
            content: [
              `A- Attack Surface and Vectors

The Attack Surface

The attack surface refers to all the points where a malicious threat actor can try to exploit vulnerability. This encompasses any location or method where an actor can interact with your environment, including:

- Human beings (employees or users)
- Applications and files
- Networks, ports, and computers`,
              `Minimizing the attack surface means restricting access so that only necessary endpoints, open protocol ports, services, and methods are permitted. Each of these elements must be assessed for vulnerabilities and continuously monitored for intrusions.`,
              `You can effectively minimize and reduce your attack surface through several steps:

- Closing unneeded ports on a firewall.
- Disabling unused services on servers and workstations.
- Training users on security awareness.
- Securing endpoints (laptops, desktops, tablets, and phones) with up-to-date antivirus software and proper patches.
- Implementing strict compliance and data loss prevention policies.`,
              `When evaluating your attack surface, you must consider the attributes of the threat actors posing the highest risk. For example, the attack surface for an external actor should be kept far smaller than that of an insider, because internal users already sit behind the firewall with pre-approved authorization and privileges.`,
              `Attack Vectors

From a tactical perspective, each part of the attack surface represents a potential path or vector for an intrusion. A threat vector is the specific path a threat actor uses to execute data exfiltration, service disruption, or disinformation attacks.`,
              `Sophisticated threat actors typically utilize multiple vectors and plan out a multi-stage campaign rather than relying on a simple "smash and grab" raid. Highly capable actors are also skilled at developing novel vectors—new, custom methods to breach defenses. In fact, a skilled threat actor's reconnaissance and knowledge of your organization's attack surface may sometimes surpass your own, giving them a distinct advantage in bypassing your security controls.`,
            ].join("\n\n"),
            example:
              "A company reduces its attack surface by closing unused firewall ports, disabling an obsolete service, patching employee laptops, and training staff to report suspicious activity.",
          },
          {
            heading: "Vulnerable Software Vectors",
            content: [
              `B- Vulnerable Software Vectors

Fault in Code or Design

Vulnerable software stems from human error, meaning developers or manufacturers can make mistakes in the underlying code or software design. When a malicious threat actor discovers a flaw before the developer is even aware of it, it is known as a zero-day exploit. Until the developer creates and releases a patch, this open flaw poses a severe risk, leaving organizations completely exposed to potential attacks.`,
              `Delays, Difficulty in Patching, and Legacy Systems

Modern software is far more complex than it was decades ago, with developers frequently pushing out new versions every few months. Consequently, software vendors often focus their attention and resources on newer products rather than maintaining and securing older versions. This leads to several major challenges:

- Unsupported Systems and Applications: Older operating systems and apps reach their end-of-life or end-of-support much faster than before. Once software loses vendor support, no more patches or security updates will be released.
- The Open-Source Exception: If legacy software is open-source, an organization's in-house developers can review the code and implement their own remedies. If it is closed source, however, companies have no direct way to patch it.
- Forced Migrations: This is why medium to large-scale organizations are often forced to migrate to newer operating systems and applications as quickly as possible—not necessarily out of preference, but out of absolute security necessity. Companies simply cannot afford to run unsupported systems when a newly discovered vulnerability could leave them defenseless.`,
              `Client-Based vs. Agentless Scanning

To automate the discovery and classification of these software vulnerabilities, organizations utilize scanning software. However, these exact same tools can also be leveraged by threat actors during their target reconnaissance phase. Vulnerability management tools generally operate in two ways:

- Client-Based (Agent-Based): An agent is installed as a local process directly on each host endpoint (such as employee PCs and laptops), which then regularly reports data back to a central management server.
- Agentless: The vulnerability management product scans a host remotely without requiring any software installation on the target machine. Because threat actors lack direct access to install software on corporate endpoints, they typically rely on agentless scanning approaches when performing reconnaissance against a target.`,
            ].join("\n\n"),
            example:
              "A scanner finds an unsupported application with a known flaw on a workstation; the security team prioritizes replacing the application or isolating the machine because no vendor patch is available.",
          },
          {
            heading: "Network Vectors",
            content: [
              `C- Network Vectors

Remote vs. Local Software Exploitation

While vulnerable software gives a threat actor the opportunity to execute malicious code, they must be able to run that exploit code either over a network or directly on the target system. Exploit techniques are generally categorized as:

- Remote Exploitation: The vulnerability is exploited by sending code over a network to the target, without requiring an authenticated session on the system.
- Local Exploitation: The exploit code must be executed from an authenticated session on the target computer. Even if the attack originates over a network, the threat actor may still need valid credentials or an existing session to execute it.`,
              `To minimize these risks, administrators must reduce the attack surface by eliminating unsecured networks, networks that lack the core principles of confidentiality, integrity, and availability:

- Lack of Confidentiality (Eavesdropping): Threat actors snoop on network traffic to recover sensitive information or passwords.
- Lack of Integrity (On-Path Attacks): Threat actors attach unauthorized devices to intercept and modify traffic, run spoofed apps, or execute exploit code against other network hosts.
- Lack of Availability (Denial of Service): Threat actors perform service disruption attacks.`,
              `A secure network relies on robust access control frameworks and cryptographic solutions to identify, authenticate, authorize, and audit network users, hosts, and traffic.`,
              `Specific Threat Vectors Associated with Unsecured Networks

Threat actors exploit various network mediums and configurations to gain unauthorized access:

- Direct Access: Physical access to a site, such as accessing an unlocked workstation, booting from an external disk to install malicious tools, or physically stealing a PC, laptop, or disk drive.
- Wired Networks: An attacker with site access plugs an unauthorized device into a physical network port to launch eavesdropping, on-path, or denial-of-service attacks. Organizations often mitigate this using port security, which tracks MAC addresses and automatically shuts down a port if an unauthorized device is plugged in.
- Remote and Wireless Networks: Attackers crack security protocols, use stolen credentials for remote or wireless access, or spoof trusted access points for credential harvesting.
- Cloud Access: With many companies utilizing internet-accessible cloud infrastructure, an attacker only needs to find a single account, service, or host with weak credentials—often targeting developer accounts, management systems, or even attacking the cloud service provider itself.
- Bluetooth Networks: Exploiting vulnerabilities or misconfigurations over the Bluetooth Personal Area Wireless Networking protocol to transmit malicious files to a user's device.
- Default Credentials: Gaining control of network devices, switches, firewalls, routers, or access points left configured with standard factory settings (such as blank passwords, admin, or admin1234). It is critical to change these default credentials immediately.
- Open Service Ports: Leaving unnecessary ports open. While most of the 65,536 ports are closed by default, any well-known common port left open unnecessarily exposes the organization to reconnaissance and exploitation by threat actors.`,
            ].join("\n\n"),
            example:
              "An attacker plugs a rogue device into an office network port and intercepts unencrypted traffic; port security can detect the unknown MAC address and shut down the port.",
          },
          {
            heading: "Lure-Based Vectors",
            content: [
              `D- Lure-Based Vectors

These vectors rely on tricking or luring users into taking an action they should not take.`,
              `Bait and Removable Media (Drop Attacks)

Attackers often use enticing bait to tempt a target into interacting with malicious items—such as a file promising a quick way to make money in five days, or a fake salary slip sent by mistake that exploits human curiosity.`,
              `Another common lure-based tactic is a drop attack, which utilizes removable physical devices like flash drives or external drives left in common areas. The goal is to trick an employee into plugging the device into a workstation:

- While some malware requires the user to open a file and click an executable, many modern payloads execute automatically the moment the drive is plugged in.
- Organizations mitigate this risk by disabling features like Autoplay on endpoints to prevent automatic execution.`,
              `Executable Files and Trojan Horses

Threat actors frequently use executable files disguised as something useful such as a cool utility toolbar, a plugin, or a video game. Often, the program will function as advertised so the user doesn't suspect anything is wrong or uninstall it. Meanwhile, hidden in the background is a Trojan horse, which is a type of malware that pretends to be legitimate while secretly causing harm to the system.`,
              `Document and Media Files

Lure-based vectors also include common document and media formats that look harmless on the surface:

- Documents: Word documents and PDF files may contain legitimate text while hiding embedded threats like macros or malicious scripting technologies. Just because a file opens correctly and displays real information does not mean it is safe.
- Images and Videos: Image and video files can also be weaponized. While the media file will open and display properly, it can exploit viewer or browser vulnerability or contain hidden malicious code.`,
              `A common way everyday users encounter this is by visiting unsavory websites or downloading pirated torrents of popular movies and TV shows. Downloading files from unverified sources frequently exposes users to hidden malware, macros, and scripting payloads embedded right inside the media file.`,
            ].join("\n\n"),
            example:
              "An employee plugs in a flash drive labeled as a salary document; the file contains a malicious payload, but disabling Autoplay and training staff not to use unknown media reduce the chance of execution.",
          },
          {
            heading: "Message-Based Vectors",
            content: [
              `E- Message-Based Vectors

When using file-based lures, threat actors need a delivery mechanism and a message to trick users into opening the file. Consequently, any features that allow direct messaging to users form part of the potential attack surface.`,
              `There are five primary message-based vectors:

- Email: Attackers send malicious file attachments or links via email or other communication systems. Success relies entirely on social engineering to persuade or trick the user into opening the attachment.
- Short Message Service (SMS): Files or links are sent directly to a mobile device via text message. While still prevalent, many users check text messages infrequently compared to other channels.
- Instant Messaging (IM): Modern replacements for SMS—as well as older platforms like Yahoo Messenger, Hotmail Messenger, or classic Skype—run across Windows, Android, and iOS, supporting voice, video messaging, and file attachments. Sending a message with a file attachment or link can compromise an account or install malware.
- Web and social media: Threat actors exploit social media platforms (such as Facebook) where malware can be concealed in attachments, disguised as downloads, or executed through compromised accounts posting spam or scam links. Attackers can also compromise a site to automatically target vulnerable browser software—known as a drive-by download. Additionally, simply opening certain direct messages or accepting unsolicited friend requests can lead to account compromise, making communication security critical.
- Voice and Pretexting: Message-based vectors can also be exploited via voice calls, where an attacker uses social engineering and pretexts (such as impersonating an IT help desk technician) to trick a user into revealing passwords or weakening security configurations (like turning off a firewall).`,
            ].join("\n\n"),
            example:
              "A caller impersonates the help desk, claims a user's account is at risk, and asks them to reveal a password and disable a firewall; verifying the caller through an official channel prevents the deception.",
          },
          {
            heading: "Supply Chain Attack Surface and Managed Service Providers",
            content: [
              `F- Supply Chain Attack Surface

A supply chain is the end-to-end process of designing, manufacturing, and distributing goods and services to a customer. Rather than attacking a target directly, a threat actor may seek ways to infiltrate an organization via companies within its supply chain. Ensuring reliable sources of equipment and software is known as procurement management, which involves three key types of relationships:

- Supplier: Obtains products directly from a manufacturer to sell in bulk to other businesses (business-to-business trade).
- Vendor: Obtains products from suppliers to sell to retail businesses or directly to customers, often adding customization and direct support (such as hardware manufacturers adding custom software to an operating system).
- Business Partner: A closer relationship where two companies share closely aligned goals and marketing opportunities. For instance, massive software manufacturers like Microsoft rely on original equipment manufacturers (OEMs) and solution partners to expand their markets and improve product support.`,
              `Each link in the supply chain—from the companies fabricating individual chip components to the couriers handling delivery—represents a potential entry point for a malicious actor. Anyone with the time and resources to modify computer firmware or hardware along the way can create backdoor access. Establishing a trusted supply chain means denying malicious actors the opportunity to tamper with supplied assets.`,
              `Managed Service Providers (MSPs)

The IT industry also relies heavily on outsourced services, such as a Managed Service Provider (MSP), which provisions and supports IT resources like networks, security, or web infrastructure. Organizations often use MSPs when it is cheaper or more reliable than managing IT in-house. However, from a security perspective, outsourcing introduces complexity because it is difficult to monitor an external MSP's security practices, leaving their employees as potential sources of insider threats.`,
            ].join("\n\n"),
            example:
              "A company verifies software suppliers and checks device integrity before deployment, while reviewing its MSP's access and security practices to reduce supply-chain risk.",
          },
        ],
      },
      {
        heading: "Social Engineering",
        subheadings: [
          {
            heading: "Recognizing Social Engineering",
            content: [
              `These vectors rely on tricking or luring users into taking an action they should not take.`,
              `When using file-based lures, threat actors need a delivery mechanism and a message to trick users into opening the file. Consequently, any features that allow direct messaging to users form part of the potential attack surface.`,
              `Email: Attackers send malicious file attachments or links via email or other communication systems. Success relies entirely on social engineering to persuade or trick the user into opening the attachment.`,
              `Voice and Pretexting: Message-based vectors can also be exploited via voice calls, where an attacker uses social engineering and pretexts (such as impersonating an IT help desk technician) to trick a user into revealing passwords or weakening security configurations (like turning off a firewall).`,
              `Organizations mitigate the risk of drop attacks by disabling features like Autoplay on endpoints to prevent automatic execution.`,
              `A common way everyday users encounter lure-based vectors is by visiting unsavory websites or downloading pirated torrents of popular movies and TV shows. Downloading files from unverified sources frequently exposes users to hidden malware, macros, and scripting payloads embedded right inside the media file.`,
            ].join("\n\n"),
            example:
              "An employee receives an urgent email that appears to come from IT and asks them to sign in through a link; they report it and contact IT using the published help desk number instead of following the link.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Implement Identity and Access Management (IAM)",
    category: "Identity and Access Management",
    duration: "120 min",
    objective:
      "Implement password-based and multifactor authentication, account policies and authorization solutions, and single sign-on and federated identity solutions.",
    agenda: ["Authentication", "Access Management", "Identity Management"],
    lessons: [
      {
        heading: "Authentication",
        subheadings: [
          {
            heading: "Authentication Design",
            content: [
              `In IT, when we talk about simple authentication, we talk about the concept of proving you are the owner of an account, or you are the owner of a device. This can be done in many ways, and each of these ways is referred to as a factor, but it's also called a category.`,
              `This could be something you know, like a password or a PIN or a phrase.`,
              `This could be something that you have in your possession in person, like a bank card, smart card, fob, even your phone, because the phone originally receives an OTP (One Time Pin), and it's on a device that you possess. Or maybe on this device you've got an authenticating app. This could be the Microsoft Authenticating App, the Google Authenticating App.`,
              `This could be something that you are, which is normally biometric in nature, like a fingerprint scan, retina eye scan, facial recognition, voice recognition.`,
              `The three we've just mentioned are the three most common ones, the most widely used ones, but not the only used ones. Those are the factors you get when it comes to proving you are who you claim to be, or that you are the owner of the device or the account.`,
              `Now, when it comes to authentication design, there's certain things we need to meet. We need to meet the requirements for confidentiality, and for that we've got three characteristics, which are our CIA triad:

- We need to keep credentials secure; that is confidentiality. Confidentiality is to make sure something is for certain people's eyes only.
- We also need to make sure threat actors cannot bypass or subvert the authentication mechanisms, which would be integrity.
- We need to make sure mechanisms do not cause undue delay or support issues; that is availability.`,
              `It's quite tricky to achieve all three of these. The reason is you need to find a solution when it comes to proving your identity that meets all three of these categories. That is what your authentication design is. Authentication design comes down to the CIA triad, where we need to try and tick all three of these.`,
              `If you look at things like single sign-on, single sign-on is awesome because it gives you availability. People can go and log in very quickly; there's no delay. But it might be a downside if it's not implemented correctly. Some perpetrators, threat actors could potentially go and bypass this, and that can be your company's downfall or your client's company's downfall.`,
              `Something you know is the knowledge factor. We've got a password. A password is one of the most common forms of authentication we get when it comes to something you know. You or the user must provide a password. Generally, you'll find that password has to meet certain complexity requirements, like a minimum of eight characters these days, or potentially more in some cases. It has to be uppercase, it has to be lowercase, it has to have numbers and symbols in it.`,
              `It's quite tricky these days to get a password chosen. Now we understand the risks involved and we understand why this must be done. And since we understand the risks involved and why this is being done, it's not too difficult for us IT people to go and choose a password. But for the end user that does not understand why we are doing this, this can be quite inconvenient as you can imagine sometimes. Another example of something you know, besides a password phrase, is a PIN, a personal identification number. How you receive this, that's the question. In the old days it might just have been via an SMS, but these days it's more common to find these via some other method, like via email, via an authentication app potentially.`,
            ].join("\n\n"),
            example:
              "A user signs in with a password and a fingerprint, balancing credential confidentiality, resistance to bypass, and a quick sign-in experience.",
          },
          {
            heading: "Password Concepts",
            content: [
              `When it comes to password concepts, the first thing you need to know is length. Passwords should ideally not be short. The shorter the password is, the easier it is for somebody, a threat actor or otherwise, to go and crack that password. Whether they're guessing the password or using some form of software, it's going to be easier. The longer the password is, the harder it is to get into whatever it is this potentially is. That is why you'll find that most websites and platforms and things these days will limit the user to have a minimum of an eight-character password. You can have a longer password; they don't normally have a limit as to how long the password can be, but normally the minimum length must be at least eight characters long.`,
              `Most websites and platforms these days you'll find a complexity requirement as well. It's a character combination. That means you've got to have uppercase letters in there, lowercase letters in there, a couple of random numbers in there, symbols, the whole shebang. So, it's uppercase, lowercase, numbers, and symbols. That is just going to make it so much harder for someone or something to crack this password. It doesn't help much if I've got an eight-character password, but it's an actual word you could potentially find in a dictionary. Then I can go and use a dictionary attack, a form of software that's going to use actual words in the dictionary to try and guess what your password is. Unfortunately for us, dictionary attacks don't work on most websites and platforms and stuff these days simply because of these complexity requirements we've got now. It forces you or the user to have a couple of random letters and numbers and symbols and stuff in there. So, if someone were to go and try to use some form of software that's going to try actual words in the dictionary, guess what? It's not going to work because people have got random characters and numbers and symbols in their password.`,
              `Aging is another important thing to have. Aging means passwords ideally need to expire after a certain period. You'll find for the average company, the average password for the average user will expire after approximately three to six weeks. The sweet spot is approximately four weeks for most companies, but it could potentially be less than four weeks or more than four weeks. We want passwords to expire. Why do you ask? Well, because if they don't, there's a chance that a friend, a colleague, or somebody not so nice, maybe a threat actor, has seen or used that password, and we don't want that. Maybe one of the users in your company or your client's company shared their password with a colleague or a friend. You know, they do that sometimes; they don't understand the risks involved, and that's bad, as you can imagine. So, if that were to be the case, if we make passwords expire, it's not going to help that person either. That password will cease to function because it's going to expire.`,
              `It's also in the event of somebody or something actively cracking the password in the background, which we call a brute force attack. When it comes to brute force attacks, that simply means someone is trying to guess the passwords, usually using some form of software, and in most cases, they will be using a beefed-up machine to do this, usually a supercomputer. Now it takes time to crack a password. Sometimes it just takes days, maybe just a couple of hours, but in most cases, it takes a couple of weeks or even a month or so depending on how beefed up the supercomputer is. Now if you make the password expire, by the time that supercomputer cracks that password, it would have expired. It might even potentially have expired two or three times over, which means they can't get in even if they crack the password. So, they need to be able to crack the password faster than what it would potentially require. They need a lot of processing power is what we're saying here.`,
              `The fourth one I want to mention to you in terms of password concepts is reuse and history. You'll find that most platforms these days do not allow the user to use a password that they've used before for many reasons, because what if that password has potentially been seen by somebody out there? Somebody, maybe a couple of months ago, even years ago in some cases, might have known the password or seen the password, and if one of your users can go and use a previously used password, that's bad. Remember the average user does not understand the security risks involved with all of this. They're not in IT, or should I say cybersecurity, like you. They are a salesperson, a secretary, an assistant, a doctor, a lawyer. They're in a completely different field than what you are. They've got their own respective fields that they are experts in, and you are the expert in this field. You understand the risks involved in this field. So, it's up to us to protect these users basically from themselves, if I must put it in simple terms.`,
              `By preventing these users essentially from using passwords that have been used previously before, we are protecting them from themselves. A lot of users are keen on using passwords they've used in the past because they're easy to remember. If they're going to go and choose a completely new password, it's something they've got to go and remember all over again from scratch, which is quite inconvenient for most of us, even for ourselves. But if a user can go and use a new password, which is not technically a new password, it's one that they've used a couple of months ago, so they still kind of sort of remember it, it's a lot easier for them to remember it, which is why they're so keen to go and choose previously used passwords. Unfortunately, that's an extremely dangerous thing to do. So, on most websites and platforms, as soon as the user tries to use a password they've used before, you'll find that by default this is going to be blocked without you even doing anything. This is normally built on most platforms.`,
              `NIST Guidance, or National Institute of Standards and Technology Guidance, is a set of guidelines for us IT people. In the sense of things like password concepts, it's what's accepted, or should I say, what is best practice at this exact moment, and what's not a good idea, what you should not go and do.`,
              `For example, at the moment you'll find maybe companies are using single sign-on, but in two years from now, NIST might say please stop using single sign-on because we've got the following new vulnerabilities that have been discovered; instead, go and use this and go and use that.`,
              `So now, what's quite popular amongst many companies, which is recommended by NIST, is passwordless authentication. So that includes but is not limited to things like FIDO2. Another thing that's recommended is password hints. A lot of websites and computers and platforms these days have some form of password hint you can implement to help remind users of what their password is if they can't remember it. Now, the National Institute of Standards and Technology recommends that people do not put the password in the hint. They recommend that you need to be as vague as possible, or the user be as vague as possible if they are going to use this.`,
            ].join("\n\n"),
            example:
              "A company requires long, complex passwords, blocks recently used passwords, and reviews current NIST guidance when setting password policy.",
          },
          {
            heading: "Password Managers",
            content: [
              `Password managers do come with most computers already. If we look at something like Windows, it has got something built into it called password credentials or Credential Manager in some cases.`,
              `So instead of you having to go and remember a whole boatload of passwords, which is quite difficult sometimes, you just need to remember one password. We call this the vault or the master password. So that is the password to your password manager, and this password manager, whatever kind of password manager you use, will in turn store all your other passwords. Considering that there's one password that protects all your other passwords, that main password needs to obviously be your most secure password. That's probably your most important password because if I have that password, I essentially have all your passwords.`,
              `These password managers can be built into other things like your operating system, so you get managers built into the operating system, and you get browser password managers. If you go to a website—this could be social media, your banking, it could be anything—very often your browser will ask you, do you want your browser to remember this password? If you go to a website, your browser will automatically sometimes fill in the password for you or ask you if it can fill in the password automatically. So, this does give you a massive sense of convenience. It is very dangerous, though, because if a perpetrator, a threat actor, gets a hold of this main password of yours, the vault or master password as it's referred to sometimes, they effectively have the password to everything of yours.`,
              `Why is it such a good idea, though, to use a password manager? So many people have so many passwords, and due to people, including myself and you, having so freaking many passwords, what a lot of these people tend to do to help them remember these passwords, besides password managers, is they tend to use the same password or nearly the same password. Whether it be their social media like Facebook, the platform called X, or Instagram, their banking, or their company websites, a lot of people will use the same password for multiple platforms and software. That's a very bad thing to do. Even if you've got a secure password, using the same password for multiple things is always a bad idea because if I am that threat actor and I manage to get a hold of this password, whether it be cracking it or whatever, I effectively have access to everything now. That is very dangerous.`,
              `If we go look at something like Google's Gmail platform, it is very insecure—I mean, it's gotten a lot more secure over the years now, but it is generally seen as one of the easier platforms to break into. Now if you have a password on your Gmail, which is generally not too difficult to break into, and you use that same password on your banking, your banking is obviously very secure, I probably can't break in there, but I can break into your Gmail. And if I get your password on your Gmail, chances are pretty good you're using that same password for your banking now. So, you see what you're doing here: you're putting yourself at risk. Do not use the same password, because how the heck do you remember all these passwords, especially if you look at the previous topics where we said we need to meet a minimum length and complexity requirements, and these passwords can expire? How do I expect you to remember all these passwords? Well, the fact of the matter is you don't need to remember these passwords. You just need to remember one password, your vault password, or should I say your master password. That is the password to your password manager. This could be built into your browser; this could be built into your third-party password manager (third-party cloud/plugin).`,
              `These third-party cloud password managers sometimes involve a plugin that might need to be installed in your browser first. At first glance, they might not work. Maybe you just installed it, but if you go to your browser, it might not necessarily pop up automatically. You might need to install a plugin first before it'll work. I normally don't use third-party password managers simply because it's too inconvenient for me, but I'm just mentioning it to you as well. If you decide to use a third party for whatever reason, there's a very good chance you might need to install a plugin on your browser first before you can actually use it.`,
              `What's also pretty cool about these password managers is if your password for something expires, whether it be a program, a website, or just in general when you need to choose a password, your very first password for something, the password manager actually generates your password (per-site password generation). It'll give you a totally random generated password which is very secure, it meets all these complexity requirements, and if it does not, you just fill in what requirements you want. I want an eight-character password, or I want a 10-character password that needs to have this, it needs to have that, and the password generator will follow those instructions and generate you a password that meets those requirements. It won't just generate a password; it'll automatically store that password for you (secure filing). How convenient is that?`,
              `So, there's not really any downsides to these password managers. The only real downside is if someone happens to get a hold of your master password, which is very unlikely since it's only one password you have to remember, you can probably afford to make it a little bit more secure. I would say don't just make it eight characters, make it 10 characters or maybe make it 12 characters since that's the main, main password.`,
              `Another downside about password managers is sometimes some of these password managers work in the cloud, and if the cloud gets compromised, which is very unlikely, then your password manager is compromised. Also, if you visit a website that's spoofing, a website that is pretending to be another legitimate website, that could potentially be a problem. Normally, it's not a problem because when you go to a website that asks for credentials, your password manager will check the certificate of that website.`,
            ].join("\n\n"),
            example:
              "An employee uses a password manager to generate and save a unique password for each site, protecting the vault with a strong master password.",
          },
          {
            heading: "Multifactor Authentication",
            content: [
              `That is the concept of proving you are who you claim to be or what you claim to be. This can be done in many ways, many categories. Each of these categories is referred to as a factor.`,
              `Multifactor authentication simply means the user has to prove they are who they claim to be in more than one category, more than one factor. Now, the first factor, or category, which is the most used one, is something you know. The second one is something you have, the third factor would be something you do or something you are. It could also be something that you're doing. Now, that is quite rare in most cases, but you do find those. So, if you have ever seen a good action episode or an action movie, maybe like a Mission Impossible movie, and you see Tom Cruise doing some funky stuff to break into some sort of facility, that is usually something you do. This could involve walking a certain way or something along those lines. It's not just fantasy; it does exist.`,
              `Now, the fourth category I want to throw into the mix here for you just to mix things up is somewhere you are. This used to always be there; people just didn't really use it that much. Nowadays, you'll find a lot of platforms that use this, especially the cloud. Somewhere you are is normally a form of geographic lock. You or the user would have to geographically be at a certain location before you can log into a certain device, platform, or account. It's usually based on your public IP address. So, what companies might do is force the user to be at the office. If they grab their company laptop and go home, they've got the username and password, they might not necessarily be able to log in because the system they're trying to log into will detect that they're logging in from somewhere else. They've got to log in from a specific location which has been specified by the organization. So that could be an additional factor. If a perpetrator from outside the company tries to log in, they'll probably not be able to log in because, well, they're outside the company. You've got to be inside the company just to prove you are indeed the employee.`,
            ].join("\n\n"),
            example:
              "A remote employee enters a password and approves a sign-in in an authenticator app; a location rule can also require the sign-in to originate from an approved region.",
          },
          {
            heading: "Hard Authentication Tokens",
            content: [
              `This is a way for you or the user to prove their identity once again. This topic of hard authentication tokens and ownership factor means that the user possesses some type of device that only they can operate. This is referred to as an authenticator. The authenticator is able to generate or receive a token that identifies and authenticates the user. There are three main types of token generation we get:`,
              `The first one you get is certificate-based authentication (requires PKI). It is when the supplicant controls a private key that can generate a unique signed token.`,
              `The second one you get is one-time password (OTP). This is when a token is generated using some sort of hash function on a shared secret value plus a synchronization seed, such as a timestamp.`,
              `The third one I want to mention is Fast Identity Online (FIDO2) Universal 2nd Factor (U2F). This is basically an example of passwordless authentication. I don't need a password. It's a token of sorts that gets generated in some form of way.`,
              `In a sense of authentication form factors, hard authentication is generated within a secure crypto processor. The authentication design means that there is no transmission of the token itself. Several device-based indicators can be used to implement hard tokens.`,
              `The first example is smart cards. Usually at first glance, they probably look like a bank card or something like that, but it's not a bank card. Some of them might just be white. They might look blank. You've got to bring them near a sensor of some kind before they'll detect something. They work over a wireless signal to a certain extent, but usually a smart card requires some form of special smart card reader. So, this is very expensive to implement. It's awesome security, but it's going to cost you.`,
              `Something else you get is a one-time password (OTP) fob. This refers to a crypto processor that can generate a token. This type of hardware token does not need an interface to connect with a computer. The user just reads the code that's displayed, obviously. And then the third one is a security key. This refers to a portable hardware security module, which we sometimes refer to as HSM for short, with a computer interface, and it'll normally be something like a USB or NFC.`,
            ].join("\n\n"),
            example:
              "An employee inserts a FIDO2 security key over USB and approves with its built-in PIN, using a physical authenticator instead of a password-only sign-in.",
          },
          {
            heading: "Soft Authentication Tokens",
            content: [
              `This is actually the more common one we've been using, or most of us have been using most of the time. A soft authentication token is a one-time password which is generated by the identity provider and transmitted to you or the user. In other words, we are going to transmit this as a code via some sort of out-of-band channel. This can be sent to you or the user via SMS, a text message (Short Message Service—SMS). This could be seen in an email account, which is a little bit more common these days. This could be a phone call, which is cool, so some providers will actually phone you. You'll find it's normally going to be some robot that's going to phone you. Or this is also pretty common these days, some form of push notification. You've got some form of app installed, not necessarily an authenticator app, but this app or whatever it might be will give you some sort of code that's going to pop up on the app.`,
              `If you are concerned about security, you can go and use a little bit more of a secure option. Places or entities like the banks, they don't just use your old-school OTPs anymore. Many moons ago, if you did banking online and you wanted to do some sort of transfer or payment, the bank would normally send you an OTP in the form of a text message to your phone, and you would have to enter that on your computer or whatever, and then the transaction could be complete.`,
              `Nowadays, this is not the case because OTPs are no longer as secure as they used to be, at least not in the sense of SMSs, in other words text messages, and also not so much in emails, because email addresses can be compromised and phones can be compromised because everybody has a smartphone these days. A smartphone is basically a computer, which means it can be compromised. A couple of years ago, 10, 15, 20 years ago, people did not have smartphones, so OTPs received by text message were obviously way more secure back in the day.`,
              `The more secure option you can go and use is an authenticator app, something like the Microsoft Authenticator app or the Google Authenticator app. There are quite a few other third-party ones as well. You'll find that most banks these days have their own banking app that you can install as well. Most of these banks will probably force you to install their banking app. If you want to do banking, if you want to do some sort of transfer or payment or whatever, you have to acknowledge something on the app now, which is going to be basically the replacement for the old OTP. So, this is a more secure soft OTP token which can be generated using an authenticator app.`,
              `A lot of companies will use this these days. You'll find that most organizations, if you want to log into your 365, in other words your Outlook or your Microsoft Teams, it's going to ask you to authenticate on some sort of app these days instead of just typing in your traditional password. So, this is software installed on a computer or a smartphone, probably on your smartphone. The user must register and provide an OTP with the app, typically using a scannable quick response code, or QR code for short, to communicate the shared secret key. When prompted to authenticate, the user must unlock the authenticator app with their device credentials. If it's a smartphone, you're going to unlock the smartphone in your old-school way by drawing your pattern, entering your PIN, or using your fingerprint. And then the user must unlock the authenticator app with their device credentials to view the OTP token. There's obviously less risk of interception if you compare this to something like an SMS or an email message. But as it runs on a shared-used device, there is of course the possibility that malware could compromise the app.`,
              `Unfortunately, anything can be compromised these days. All we want to achieve is to make it so darn gosh difficult for the perpetrators to the point where they'll hopefully give up or say, "You know what? Let's just move on to the next person." That's all we want to achieve here.`,
              `The possibility for interception on some sort of authenticator app, like the Microsoft Authenticator app or the Google Authenticator app or your bank's authenticator app, is way less because it's way harder, way more difficult to achieve that. So, if we don't want to give this to the perpetrators on a silver platter, if you can avoid it, try and avoid using your traditional email to send you an OTP and try and avoid your traditional text message to send you an OTP. I mean, it's a form of security, that's great, better than having no security, but if you can, try and get yourself better security is what we're saying.`,
            ].join("\n\n"),
            example:
              "A bank replaces SMS codes with an authenticator-app approval for transfers, reducing reliance on text messages that may be intercepted or received on a compromised phone.",
          },
          {
            heading: "Passwordless Authentication",
            content: [
              `FIDO2 is just one example of passwordless authentication. Now, it's very difficult for someone to go and crack something like a password if there is no password. A longer password is obviously a lot more secure, but what if you or the user just don't use a password? You use something that might be in your possession. I'm not saying it's foolproof; it doesn't mean that it can't be compromised, but it is a lot harder to compromise, obviously, which is what we want to achieve here. It's probably not going to be too long before the perpetrators, the bad actors, figure another way around this and we'll have to come up with some form of new security again. So, it's a constant battle between the white hat hackers and the black hat hackers.`,
              `Passwordless authentication relies on an authenticator rather than a password. Accounts are verified by a public and private key pair, but do not have to use PKI (public key infrastructure). Your private key in this situation is stored only on the authenticator. If we go look at something like the Microsoft Authenticator app, it is very secure.`,
              `The authenticator can require something like biometrics, like a fingerprint scan or something along those lines, or a PIN as proof of presence. This could be a local gesture, for example.`,
              `Attestation: for a passwordless system to be secure, the authenticator must be trusted and resistant to things like spoofing or cloning attacks. Attestation is a mechanism for an authenticator device, such as a FIDO security key or the TPM in a PC or laptop, to prove that it is a root of trust. Each security key is manufactured with an attestation and an ID. During the registration step, if the relying party requires attestation, the authenticator uses the key to send a report. The relying party can check the attestation report to verify that the authenticator is a known brand and model and supports whatever cryptographic properties the relying party demands. That attestation key is not unique. It would be very easy to identify individuals and could be a serious threat to privacy. Instead, it identifies a particular brand and model.`,
            ].join("\n\n"),
            example:
              "A user registers a FIDO2 key, then signs in with the key and a local fingerprint; the relying party verifies the key's attestation without identifying the individual by a unique attestation key.",
          },
        ],
      },
      {
        heading: "Access Management",
        subheadings: [
          {
            heading: "Discretionary and Mandatory Access Control",
            content: [
              `The access control model determines how users receive permissions or rights. We can say a user account that has been authenticated can be allocated rights and permissions on networks, computers, and data. An access control model simply describes the principles that govern how your users receive their rights.`,
              `If we look at something like discretionary access control (DAC), this is based on the primacy of the resource owner (based on resource ownership). In a DAC model, every resource has an owner. The owner creates a file or service, although the ownership can be assigned to any user. The owner has full control over the resource, and they can modify its access control lists (ACLs) to grant rights to other users. This discretionary access control is the most flexible model, and it's currently implemented widely in computer and network security. In file system security, it's the model used by default. This is for most Unix, Linux distributions, and even Microsoft Windows. As the most flexible model, it is also the weakest because it makes centralized administration of security policies the most difficult to enforce. It is also unfortunately the easiest to compromise as it's vulnerable to insider threats and abuse of compromised accounts (vulnerable to compromised privileged user accounts).`,
              `If we look at something like the mandatory access control (MAC) model, the DAC model which we spoke of earlier exposes information to the threat of compromise via the permitted owner accounts. The mandatory access control is based on security clearance levels. Rather than defining access control lists on resources, each object is given a classification level, and each subject is granted a clearance level (labels and clearance). In a confidentiality-oriented multilevel system, subjects are permitted to read objects classified at their own clearance level or below, obviously not above. For example, a user with top security clearance could read data with top secret, secret, and confidential classification labels. A user with secret clearance could access secret and confidential levels only, obviously nothing above that, which would be top secret clearance. Labeling objects and granting clearance take place using pre-established rules (system policies to restrict access). The critical point is that these rules are non-discretionary and cannot be changed by any subject account.`,
              `When it comes to choosing between these two, you must go and use DAC, or you must go and use MAC. At the end of the day, I suppose it's going to come down to your company's unique requirements and needs or those of your client. Generally, the MAC is seen as a little bit more secure one, but it doesn't mean that's the one that's going to be working for your unique environment. Maybe in your environment, security is not that much of a concern and maybe DAC is going to work a little bit better in your environment. So, at the end of the day, you're going to put this on a scale and check which one's going to work better for your specific needs.`,
            ].join("\n\n"),
            example:
              "A document owner grants a colleague access under DAC, while a classified system uses fixed clearance labels under MAC to prevent users from changing the rules themselves.",
          },
          {
            heading: "Role-Based and Attribute-Based Access Control",
            content: [
              `Role-Based Access Control (RBAC) is a non-discretionary and more centralized control. A very good example of this would probably be something like Microsoft's 365 as well as Active Directory, which they refer to as Microsoft Entra ID. If we go there, you'll find that you can allocate role-based access control to a user. Role-based access control means that an organization defines its permission requirements in terms of the tasks that an employee or a service must be able to perform. Each set of permissions is a role. Each principal, user or service account, is allocated to one or more roles. If you happen to have ever played on Microsoft 365 or the Azure portal, if you go to Entra ID, you will find that you can allocate roles to a user's account. These are tick boxes, they're not radio buttons. You can allocate multiple roles to a person's account depending on what he or she needs to be able to do. Under this system, the right to modify the permissions assigned to each role is reserved to a system owner. Therefore, the system is non-discretionary, as each principal cannot modify the access controls of a resource even though they can change the resource in other ways. Principals gain rights implicitly through being assigned to a role rather than explicitly being assigned the right directly.`,
              `Role-based access control is based on defining roles, then allocating users to roles. Users should only inherit role permissions to perform particular tasks. That's the only time this should happen.`,
              `Then we also get something called security groups. This is very popular in companies these days, especially amongst the cloud. A security group is a type of group. This is a way or a means to make your work a little bit easier, a little bit lighter, typical from Microsoft.`,
              `So instead of you having to go to each and every user account to assign some sort of role or permission, instead you can assign the permissions and roles to a security group and then later down the line you simply put these people into the security group and they're automatically going to inherit the permissions that come with that specific group. So that's normally how it's done.`,
              `With security groups, you assign permissions to security groups and assign user accounts to the relevant security groups. Somebody can be in more than one security group. A security group is in fact the most common kind of group you can find in environments like Microsoft 365. If you need to assign some sort of permission or policy to a group of users, simply create yourself a security group. You can call this whatever you want. Put all the relevant people into that group and they will automatically have the relevant permissions that you need. With security groups, groups can be mapped to roles.`,
              `Attribute-Based Access Control (ABAC): With attribute access control, access decisions are based on a combination of subject and object attributes plus any context-sensitive or system-wide attributes. Attribute-based access control is the finest-grain type of access control model you can find. As the name suggests, an attribute access control system makes its access decisions based on a combination of subject and object attributes plus any context-sensitive or system-wide attributes.`,
              `As well as group or role memberships, these attributes could include information about the operating system currently being used. This could include information about the IP address or the presence of up-to-date patches and anti-malware. An attribute system monitors the number of events or alerts attributed to a user account or a resource, or tracks access requests to ensure that they are consistent in terms of timing or geographic location. It can be programmed to implement policies such as M-of-N control and separation of duties if need be.`,
            ].join("\n\n"),
            example:
              "A finance employee inherits payroll permissions from the Finance role, while an ABAC policy additionally checks that the sign-in uses a patched device from an approved location.",
          },
          {
            heading: "Rule-Based Access Control",
            content: [
              `We could say non-discretionary access control. Rule-based access control refers to any sort of access control model where access control policies are determined by system-enforced rules rather than by system users.`,
              `If we look at things like role-based access control (RBAC), attribute-based access control (ABAC), and even mandatory access control (MAC), these are all examples of rule-based, or non-discretionary access control.`,
              `If you look at something like conditional access, this is something you will find in a lot of places. Most commonly, people and companies will use this on platforms like Microsoft 365 and Microsoft Azure.`,
              `With so many people working remotely nowadays from locations outside the office, the need for conditional access has become absolute. This approach establishes standard conditions that must be met before a user is granted access to a specific resource. For instance, a policy might dictate that the user must operate on a Windows, Android, or iOS system, or even require a specific Windows build or edition. Requirements can also extend to security configurations, such as enforcing password length and complexity or mandating that the device utilizes BitLocker encryption. Furthermore, organizations can implement a geographic lock, meaning the user must be physically located in a designated region to access certain assets. While this capability has traditionally relied on public IP addresses, Microsoft has recently integrated GPS location into the mix as well, making the implementation quite interesting.`,
              `Conditional access serves as an example of rule-based access control. A conditional access system monitors account or device behavior throughout an active session, and if certain conditions are no longer met, the session will be abruptly disconnected. For instance, if a user initially met all the requirements but subsequently failed to maintain them, the system would immediately break and terminate the session. Conversely, if a user initially failed to meet the requirements—a concept known as continual authentication—and suddenly satisfies them, they will be granted the ability to establish a session. As mentioned, sometimes the dynamic works in reverse as well.`,
              `User Account Control (UAC) and sudo—which were introduced around 2008 with Windows Vista—restrict privileged accounts and serve as practical examples of conditional access. With these features, users are prompted for confirmation or authentication whenever they make requests that require elevated privileges. Looking at the traditional setup of administrator versus standard user accounts, attempting to modify a system setting that requires admin rights triggers a pop-up prompt. If you are already logged in as an administrator, it simply asks if you are sure you want to change the setting. If you are not an administrator, it prompts you to provide administrator credentials to verify that you are authorized to perform the action.`,
            ].join("\n\n"),
            example:
              "A conditional access rule allows a user to open a cloud app only from a compliant, patched device and terminates the session if the device no longer meets policy.",
          },
          {
            heading: "Least Privilege Permission Assignments",
            content: [
              `The Principle of Least Privilege is more than just a course guideline or a Microsoft rule; it is a golden rule embraced by IT professionals everywhere. At its core, it means granting only sufficient permission: ensuring that users, services, or even you receive no more rights than what is strictly required to achieve a specific task or goal.`,
              `You might wonder why this applies to yourself as well. The reality is that account compromise is not a matter of if, but when. If your primary administrator account is compromised, a threat actor gains dangerous levels of access and can inflict massive damage. By using a standard user account or a restricted IT admin account for daily tasks, you severely limit what an attacker can see and do if a breach occurs. The same logic protects organizations against internal risks, such as a disgruntled employee going rogue.`,
              `However, implementing least privilege introduces real-world challenges and implications.`,
              `Initial Growing Pains and Insufficient Permissions: Administrators often find that their permissions are not comprehensive enough. For example, if you are hired as the primary administrator for Microsoft Teams, full rights in the Teams admin center are still not enough because certain configurations reside in the SharePoint admin center, the main Microsoft 365 admin center, or the Azure portal. Setting up access across all these platforms takes days, weeks, or months of fine-tuning, creating a major hurdle when handovers happen.`,
              `Authorization Creep: Over time, employees frequently need temporary permissions outside the scope of their normal duties. While advanced tools like Privileged Identity Management (PIM) or Azure guest accounts can automatically revoke these permissions, many companies still rely on manual removal. Much like forgetting to pick up milk and bread from the store after work, administrators easily forget to revoke temporary permissions after weeks or months. As small extra permissions accumulate little by little, users slowly gain excessive access.`,
              `To combat these issues, regular auditing is an absolute necessity. Organizations should review user permissions as often as possible—at least once a week or, at a minimum, once a month. Features like Microsoft access reviews can automate this process by sending automatic reminders to check privilege levels, handling certain revocations automatically while flagging others for administrators to investigate and resolve. Consistent auditing ensures that everyone maintains only the precise privileges they need, preventing security drift.`,
            ].join("\n\n"),
            example:
              "An administrator uses a standard account for daily work, requests temporary elevated access only when needed, and reviews permissions monthly to remove authorization creep.",
          },
          {
            heading: "User Account Provisioning",
            content: [
              `User Account Provisioning

Provisioning goes far beyond simply picking a username and password; it is a structured, best-practice process for creating accounts and tracking organizational assets under management. Key components include:`,
              `Identity Proofing and Background Checks: Verifying the identity of external consultants or contractors, which may include checking previous addresses, education, employment history, and criminal records.`,
              `Issuing Credentials: Setting up initial passwords (either user-selected or temporary ones changed at first logon) and enrolling multi-factor authentication methods like biometrics or hardware tokens.`,
              `Hardware and Software Distribution: Issuing corporate assets (laptops, phones, routers, SIM cards) to maintain strict security control.`,
              `Shadow IT: Unauthorized, unmanaged personal hardware brought into the network by employees, posing major security risks. BYOD (Bring Your Own Device): Authorized and managed personal hardware. AUP (Acceptable Usage Policy): Clear rules defining what employees can and cannot use company assets for.`,
              `Policy Awareness and Security Education: Educating staff on security guidelines and safe operational practices.`,
              `Access Allocation: Assigning appropriate rights using RBAC, MAC, or ABAC models. Privileged accounts are flagged for close monitoring.`,
              `User Account Deprovisioning

Deprovisioning is the exact opposite of provisioning; it is the process of removing access rights and deleting accounts when an employee leaves (due to resignation, termination, retirement, or passing) or when a contractor's project ends.`,
              `The Risk of "Smurf Accounts": Dormant, unmonitored accounts left lingering in the system are prime targets for threat actors. Remove or disable permission assignments: Accounts should be disabled immediately, necessary data backed up, and the account deleted as quickly as possible once no longer needed.`,
            ].join("\n\n"),
            example:
              "When a contractor joins, IT verifies their identity, issues a managed laptop and MFA, assigns role-based access, then disables the account and removes permissions when the project ends.",
          },
          {
            heading: "Account Attributes and Access Policies",
            content: [
              `Account Attributes

Every user account in an environment is defined by fundamental components and user profiles:`,
              `Security Identifier (SID): A unique identifier for every account. Even if two accounts share the exact same name, they are treated as distinct entities because they possess different SIDs.`,
              `Account Name and Credentials: The primary identifiers and authentication factors for logging in.`,
              `Extended Profile Attributes: Metadata describing the user, such as full name, email address, contact number, and department.`,
              `Pre-app Settings and Files: Profiles can store account pictures, user-generated data files (like home folders), and application-specific settings.`,
              `Access Policies

Access policies govern what authenticated users and devices are allowed to do on the network:`,
              `File Permission: Permissions can be assigned directly to an account or inherited through membership in security groups and roles.`,
              `System and Network Rights: Policies dictate permissions for logging on locally or via Remote Desktop (RDP), installing software, and modifying network configurations.`,
              `Active Directory Group Policy Objects (GPOs):

- On-Premises Active Directory: Used extensively in traditional on-premises Windows Active Directory environments to configure access rights for users, groups, and role accounts.
- Administrative Boundaries: GPOs can be linked to Active Directory organizational structures, including sites, domains, and Organizational Units (OUs).
- Scale and Functionality: GPOs offer over 3,000 settings and configurations. While often used to restrict user actions, they are also powerful tools for enabling features, standardizing settings, and pushing configurations across hundreds or thousands of machines simultaneously from a central server.`,
            ].join("\n\n"),
            example:
              "An Active Directory user has a unique SID, profile details, and file permissions inherited from security groups, while a linked GPO applies standard settings to their organizational unit.",
          },
          {
            heading: "Account Restrictions",
            content: [
              `Account restrictions are common controls used to limit how, when, and where user accounts can access resources. While many types exist, two primary categories are location-based and time-based policies.`,
              `1. Location-Based Policies

These policies restrict access based on where a connection originates:`,
              `Network/logical location: Require a user to be within a specific IP address range or network subnet (potentially even within the same building) before accessing certain resources.`,
              `Geolocation: Restricts access based on physical geography. Public IP and GPS: Traditionally this relies on public IP addresses, though modern cloud platforms (like Microsoft Azure) increasingly integrate GPS location data. Bypass and Mitigation: While technically bypassable via VPNs, rooting, or jailbreaking mobile devices to manipulate GPS data, these controls significantly raise the barrier for attackers, often discouraging them or forcing them to move on.`,
              `2. Time-Based Restrictions and Temporary Access

These controls govern when and for how long accounts can be active:`,
              `Log-on Hours: Limits access to specific business hours (e.g., between 8:00 AM and 5:00 PM), automatically blocking and potentially alerting the IT team for attempts outside those windows.`,
              `Log-on Duration: Specifies the maximum length of time an account can remain logged in during a single session (e.g., an 8-hour shift) to prevent unattended sessions from remaining active.`,
              `Impossible Travel Time/Risky Logins: Detects suspicious behavior when an account successfully authenticates from two geographically distant locations within an impossible timeframe (e.g., logging in from home and then from a location an hour away five minutes later), signaling a potential compromise and triggering an automatic block.`,
              `Temporary Permissions: Typically assigned to contractors, consultants, or guest users (especially in cloud environments like Microsoft Azure) to ensure access automatically expires when no longer needed.`,
            ].join("\n\n"),
            example:
              "A conditional account policy allows access only from the corporate network during a user's scheduled hours, flags impossible-travel logins, and automatically expires a contractor's temporary access.",
          },
        ],
      },
      {
        heading: "Identity Management",
        subheadings: [
          {
            heading: "Local Network and Remote Authentication",
            content: [
              `Authentication Providers

An authentication provider is the software architecture and code that underpins the mechanisms by which a user is authenticated before starting a shell.`,
              `Passwords versus password hashes: This relies on cryptographic hashes. Plain-text passwords are never transmitted or stored directly in credential databases to prevent compromise. When a user enters a password, the system converts it into a hash and transmits it to an authority, which compares it against the stored hash in the database to authenticate the subject only if they match.`,
              `Windows Authentication

- Windows Local Sign-In: Used in workgroup scenarios (default for standalone Windows installations). Local accounts can sometimes have blank passwords. Authentication is checked locally against the Security Accounts Manager (SAM) database, part of the Windows registry.
- Windows Network Sign-In (Kerberos and NTLM): Used when a machine is joined to a corporate domain (Active Directory). It requires a username and password. Authentication is verified centrally via the Active Directory Domain Services (AD DS) server, allowing the same credentials to work across multiple domain-joined machines.
- Windows Remote Sign-In: Used when working outside the physical office. Because users are on an external network, a connection method is required to reach the office domain. Authentication is via the office network, most commonly established through a VPN (Virtual Private Network).`,
            ].join("\n\n"),
            example:
              "A standalone Windows PC checks a local account against its SAM database, while a domain-joined laptop verifies the user through AD DS and can reach it remotely over a VPN.",
          },
          {
            heading: "Single Sign-On (SSO) Authentication",
            content: [
              `Single Sign-On (SSO) allows a user to authenticate once and gain access to multiple compatible applications and services without having to continually re-enter their credentials during a session. It boosts user productivity by reducing password fatigue and time spent logging in across different platforms. If misconfigured, it represents a massive security risk. A single compromised account or flaw in implementation can allow unauthorized access across multiple systems, potentially becoming a company's downfall.`,
              `The Kerberos Protocol

Kerberos is a widely used single sign-on network authentication and authorization protocol built into Microsoft's Active Directory. It is named after Cerberus, the three-headed guard dog of Greek mythology, because the architecture relies on three core elements working together. Both human users (clients) and application services (application servers) are collectively referred to as "principals."`,
              `Key Distribution Center (KDC): An intermediary service that acts as a trusted third party to vouch for identities. The KDC consists of two main services:

- Authentication Service (AS): Handles initial user authentication.
- Ticket Granting Service (TGS): Issues service tickets so users can access network resources without re-authenticating.

In a Windows domain environment, the KDC is implemented directly on the domain controller.`,
            ].join("\n\n"),
            example:
              "An employee signs in once to a domain, receives a Kerberos ticket from the KDC, and uses service tickets to access approved applications without entering their password for each one.",
          },
          {
            heading: "Federation",
            content: [
              `Federation is a model where networks or platforms under separate administrative control share user identities by establishing mutual trust relationships. Real-world examples include using an existing Google, Facebook, or Apple account to log into third-party platforms like Reddit or X (formerly Twitter) without needing to create a brand-new account from scratch.`,
              `How it works: Federation relies on Identity Providers (IdPs) and claims. When you attempt to log in using an external provider, the destination platform queries the Identity Provider to verify your identity (essentially asking, "Do you know and vouch for this person?").`,
              `Benefits: Federation eliminates account fatigue, reduces password proliferation, and delivers a smoother, more seamless user experience across different services.`,
              `With federation covered, you have made your way through the entire module on access control, account management, restrictions, and authentication!`,
            ].join("\n\n"),
            example:
              "A user signs in to a third-party service with a Google account; the service trusts Google's identity provider to verify the user instead of creating a separate password.",
          },
        ],
      },
    ],
  },
  {
    id: 13,
    title: "Analyze Indicators of Malicious Activity",
    category: "Malware and Attack Indicators",
    duration: "120 min",
    objective:
      "Analyze indicators of malicious activity across malware, physical and network attacks, and application attacks.",
    agenda: [
      "Malware Attack Indicators",
      "Physical and Network Attack Indicators",
      "Application Attack Indicators",
    ],
    lessons: [
      {
        heading: "Malware Attack Indicators",
        subheadings: [
          {
            heading: "Malware Classification",
            content: [
              `What is malware? It's an umbrella term. It's a collection of things. If we talk about things like viruses, worms, spyware, adware, ransomware, all of those fall under that umbrella which we call malware. While "malware" is a broad umbrella term that can mean almost anything, a "virus" is a specific type within that family. Saying you have malware just tells you something malicious is present, whereas identifying it as a virus tells you the exact category of threat you're dealing with.`,
              `Now we're going to discuss quite a few things under that umbrella called malware. The first is viruses and worms.`,
              `A virus is generally a piece of malicious code. The intent behind it was built to be harmful right from the start.`,
              `There are times when code might not be malicious from the start. For example, if you write a piece of code and the intention for that code is to shut down PCs after work to conserve electricity, it runs automatically every day at 4:30 after the employees have left the company, and the idea is just to conserve electricity. We can call this green code if we have this palm-sucking name here. But if you go take that exact same code and execute it in the middle of working hours, now this could be seen as a virus because the intent behind it is malicious.`,
              `Worms were huge about 20 years ago. The most popular way would obviously be email. Somebody would get an email, usually from someone they know and trust, they would open it or open an attachment in the mail and they've got a worm. The worm would go and execute. The worm would immediately email everyone in your recent contact history, pretending to be you. Since your contacts trusted you, they would open it and get infected too, keeping the cycle going. Beyond spreading, many of these worms hijacked computer screens with non-stop, highly inappropriate pop-up ads. While not every historical worm operated this way, it was a massive and awkward headache to experience.`,
              `Potential exam question: A penetration tester is performing a thorough vulnerability scan against a company network. The results indicate that port 445 is open, many systems use default credentials, and all systems are unpatched. Which of the following vulnerabilities is most likely to be exploited: virus, keylogger, worm, or rootkit?`,
              `The correct answer is a worm because we're talking about malware that does not require user intervention to function or replicate across a network or, better yet, come from the internet to exploit systems and enter a company. Typically, especially when we're talking about port 445, that is a very specific port number, and that is because this is associated with the WannaCry ransomware worm, which is associated with the EternalBlue vulnerability. This is absolutely essential to know for your exam: port 445 is associated with the WannaCry ransomware worm because this worm is known to infamously exploit this open port alongside things like default credentials or unpatched systems. At least worms in general are known to exploit these vulnerabilities.`,
              `A rootkit is a piece of malware that's also very sophisticated, operates at the kernel level of the operating system, and attempts to effectively evade antivirus detection.`,
              `A keylogger can either be a physical device you plug into your laptop, but it can also be a piece of software that is installed on the device. What it'll do is automatically track all the keys that you type on your keyboard and send those directly to the attacker, whoever installed this malware to begin with.`,
              `A virus is a piece of malware that does require user intervention to replicate and execute because of how it works: a virus attaches itself to a program and it can only be run once the user double-clicks and runs that program, which will consequently run that virus alongside it.`,
              `Trojans are also often referred to as Trojan horses. It is usually something that pretends to be one thing when it's doing something else. It's pretending to be some useful toolbar, meanwhile in the background stealing your PC, or it's pretending to be some cool game or some cool program, meanwhile in the background it's stealing your PC. What are we going to do? We're going to uninstall that program, that game, or that toolbar, and that's the last thing these threat actors want. They want us to keep it on our machines.`,
              `Potentially unwanted programs and potentially unwanted applications (PUPs/PUAs) often slip onto your system during the installation of other software. If you rush through the installation wizard without paying close attention, it installs a boatload of unwanted extras—like changing your browser homepage, adding useless toolbars, or forcing an unwanted antivirus or tool onto your computer.`,
              `Choosing express or default installations usually forces unwanted extras into your system with no way to opt out. That's why IT professionals choose custom or advanced installations, so we can untick boxes and block browser changes, toolbars, and unnecessary junkware from sneaking onto our computers.`,
              `Another example is buying a brand-new PC pre-loaded with factory bloatware. Manufacturers—like Dell, just as an example—pre-install brand-specific apps and extra software you didn't ask for (pre-installed "bloatware" or software installed alongside another app). While some users might find them useful, many of us just consider them unwanted clutter. Another example of pre-installed third-party software is Norton Antivirus. It is another classic example of bloatware (or grayware). It's annoying for users who don't want it, and removing it can be a real hassle.`,
              `Ultimately, PUPs and PUAs come down to two scenarios: pre-installed factory bloatware or unwanted extras bundled into software installations behind your back. It's not completely concealed, but installation can be quite covert. While not entirely hidden, these installations use covert tactics to trick you and easily sneak under the radar if you aren't paying attention. So, never mind it being called bloatware, it's also referred to as grayware.`,
            ].join("\n\n"),
            example:
              "A user opens an infected attachment that emails itself to their contacts; a separate workstation's rootkit hides at kernel level, while a bundled toolbar is classified as a PUP or grayware.",
          },
          {
            heading: "Spyware, Adware, and Keyloggers",
            content: [
              `The first thing we're going to talk about here is cookies (tracking cookies, super cookies, and beacons); it's got to do with web browsing. Basically, it stores your search history. If you've searched for certain terms, let's say you were searching for a new car, that's going to be in your cookies. Websites you've visited recently, that's going to be in your cookies. If you told your web browser to remember the login details for certain websites, that's going to be in your cookies.`,
              `A lot of websites out there want access to your cookies because if they got access to your cookies, they would know what you've recently searched for, what websites you've recently visited, and they will use this for various things, but one of the main things they use this for is targeted ads.`,
              `There's a lot of websites these days that will ask you, do you want to allow this website to store cookies and stuff? And you can go and say yes, accept all, only accept some, or I don't want to accept any of them. Unfortunately, with some of these websites I've noticed, especially with cell phones, if you say I don't want to accept the cookies, it just refuses to load the website. They kind of force you to accept the cookies before they allow you to visit the website, which is very annoying.`,
              `Tracking cookies are basically a plain-text file. It is not malware, but if permitted by your browser settings, third-party cookies can be used to record your web activity. It can track your IP address, harvest various other kinds of metadata, your search history, and all kinds of things we don't want them to have.`,
              `A supercookie is when some browser software gives you some control over what cookies to accept, and only will go and say, no, I don't want to accept their cookies. Some of these web marketing companies have come up with new alternative ways of implementing tracking, and these are not always legal or not so nice. That is why a supercookie stores tracking data in a non-regular way, such as saving it to a cache perhaps without declaring the data to be a cookie or encoding the data in a header request.`,
              `Beacons are a single-pixel image which is embedded into a website. While this is invisible to the user, the browser must make a request to download the pixel to load that site, giving the beacon host the opportunity to collect metadata again, perform browser fingerprinting, and potentially run tracking anyway.`,
              `Adware (PUP/bloatware): Do you sometimes open your browser to find a random new toolbar or changed homepage? That usually happens when you click "next, next, next" through default installation settings for a new game or program. That's why you always need to watch out when using default installation settings.`,
              `Most IT pros choose custom or advanced installations. This lets you pick the install directory and easily untick boxes to block unwanted toolbars, software, and browser homepage changes. Potentially unwanted software changes browser settings without your consent or knowledge. The only way to spot these hidden changes beforehand is by selecting custom or advanced installations, which is why IT pros always use them.`,
              `Spyware and keyloggers: Spyware is an umbrella term for monitoring software used to spy on users. While some variants can infect a system remotely, most require the perpetrator to have direct access at some point to install it. Spyware logs your activity through screenshots, video streams (use of recording devices and screenshots), or keystrokes (redirection) so attackers can monitor you in real time.`,
              `A classic example is the keylogger, which itself has subcategories:

- Full-capture keyloggers record every single keystroke. While intimidating, they generate an overwhelming amount of raw data (backspaces, spaces, typos), making it a tedious multi-day nightmare for an attacker to sift through looking for sensitive details.
- Targeted keyloggers specifically detect when you're entering sensitive information or logging into an account, making them much more dangerous and efficient for threat actors.`,
            ].join("\n\n"),
            example:
              "A tracking pixel records a page visit, while a targeted keylogger captures keystrokes only when a user signs in; a custom installer helps avoid bundled adware.",
          },
          {
            heading: "Backdoors, Remote Access Trojans, Bots, and Botnets",
            content: [
              `Backdoors is a terminology that you don't want to hear in your environment. Backdoor malware means someone potentially has access to your environment, your device, or your client's device environment and left some sort of vulnerability or software or malware on your system that basically gives them access remotely in some sort of way. They either retain ongoing access to your environment or can easily get back whenever they want. Backdoor malware is an access method to a host that bypasses standard authentication, giving a remote hacker administrative control.`,
              `One example of a backdoor is a remote access trojan (RAT). It is backdoor malware that mimics the functionality of actual legitimate remote-control programs. It will go and, for example, mimic the functionality of TeamViewer or AnyDesk or VNC, except it's not used for legitimate purposes. It's designed to specifically operate covertly. It runs silently in the background, so the user has no idea it's there, while giving the hacker remote access to your host. It allows them to potentially upload files, install software, or use living-off-the-land techniques to affect further compromises.`,
              `Bots and botnets: A bot could potentially be your own machine. A bot is only when a machine gets infected with a certain type of malware, and once it's infected with that malware, we call that machine a bot or sometimes a zombie PC. It takes a very small portion of your resources, like 1% of your RAM or 1% of your CPU power. When your PC becomes a zombie PC or a bot, it's part of a network of bots.`,
              `There are many other machines that also got infected by the same malware, and all these machines, including your machine now that's infected with this, are part of what we call a botnet. So, a botnet is a collection of infected PCs or a collection of zombie PCs or a collection of bots. During the penetration test we can use a bot plug to crack a password. We want to see if we can crack a password using a bot plug. That is why you should have other things in place that prohibit users from gaining access by just guessing a password.`,
            ].join("\n\n"),
            example:
              "A covert RAT bypasses normal authentication to give an attacker remote administration, while compromised PCs controlled together form a botnet.",
          },
          {
            heading: "Ransomware, Crypto-Malware, and Logic Bombs",
            content: [
              `Ransomware is one of the most dangerous kinds of malware that you might come across. It encrypts the target's data. If it's on just one user's machine, everything would normally be encrypted on that user's machine. If it's on your server, everything on a server will be encrypted. Not necessarily all of them will immediately spread to everything else on that network. If this is on our home network, it'll tend to spread across our home network to all our other devices on the network. If it's on the office network, it's going to spread to all the other computers and servers and stuff on the office network. That is why it is one of the most dangerous kinds of malware we might come across.`,
              `Ransomware has a couple of things in common. They normally encrypt data, display some sort of prompt on the screen that says your data has been encrypted, give us some sort of timer between 24 hours and 72 hours, 48 hours being the most common, and if this timer runs out, they're prepared to delete your data. They want us to pay a ransom in exchange for our data.`,
              `If we pay the ransom, they should give us a tool or software which is going to allow us to decrypt our data. Now just like any real hostage situation, you've got no guarantee with the hostage, which in this case is your data, that that's going to be released. They might release your data, they might not. It's 50/50 just like a real hostage situation.`,
              `Even if you successfully recover your data after paying a ransom, attackers often leave a backdoor behind. Since you've proven you're willing and able to pay, they can easily re-encrypt your files months down the line and demand another payout—having you right where they want you.`,
              `While some ransomware variants still allow you to browse the machine, others lock you out entirely. If you can still access the system, you'll typically notice that all file and program icons have changed, along with their names and extensions. Ransomware demands payment traditionally in Bitcoin, though many modern variants now let victims choose from a variety of cryptocurrencies.`,
              `Crypto-malware is also known as cryptomining or cryptojacking. That is when I use a victim's resources on their machine to cryptomine for me. Cryptomining is when you go and use your graphics card or your CPU's processing power to solve complex mathematical equations, and normally when it does, it gets rewarded in the form of cryptocurrency. You'll get Bitcoin. So, your PC is doing a lot of work solving complex mathematical equations, and it gets rewarded in the form of cryptocurrency. Now, when you do that yourself, it's just called cryptomining. Many malware variants hijack your system's resources to perform cryptomining in the background. Acting like a bot, your PC is forced to do heavy computational work for someone else's financial gain.`,
              `Logic bombs could be seen as a virus to a certain extent, depending on what kind of logic bomb this is. Logic bombs are often triggered by certain events. It could be triggered by a certain date and time; it could be triggered by someone doing something. Logic bombs are often planted by disgruntled employees within their own companies. A common trigger is employment status—such as checking if an employee's name has been removed from the payroll. Whether they resign, retire, or get fired, the moment their name drops off, the bomb executes its malicious payload.`,
              `Attackers often plant logic bombs as a malicious insurance policy before leaving an organization. These payloads remain dormant until a specific date (like New Year's Day) or a specific event occurs—such as checking the payroll to see if an employee's name has been removed after resignation, retirement, or termination—causing serious damage when triggered.`,
            ].join("\n\n"),
            example:
              "Ransomware encrypts a server and demands cryptocurrency before a deadline; separately, a logic bomb planted by a disgruntled employee activates when their account is removed from payroll.",
          },
          {
            heading: "Malicious Activity Indicators",
            content: [
              `Indicators are something funky going on your machine, your server, or your environment, or the desktop of your user.`,
              `Indicators could be browser changes. If your browser suddenly starts changing in some sort of way, that could indicate some sort of activity. So maybe you have now noticed that your homepage has suddenly changed. Suddenly, you keep getting diverted to other websites, websites you didn't even want to go to. Suddenly, you've got a toolbar installed, and suddenly your web settings have changed, your network settings have changed. These are indicators that there might be some malicious activity going on your PC. Maybe you keep seeing ads that pop up when you open a specific browser on your PC. That could be an indication of malicious activity.`,
              `Indicators could be overt ransomware notifications. If you suddenly start getting these notifications that you've got a virus on your PC or ransomware on your PC, and to install this antivirus, be careful: it might be some fake antivirus. These fake security alerts are most commonly encountered on sketchy torrent or pirate websites. You'll see browser pop-ups designed to look like a legitimate antivirus scan, falsely claiming your PC is infected and urging you to click a button to clean it. Never click these—they are entirely fake and part of scareware tactics.`,
              `Indicators could be resource consumption. If your PC starts feeling slower, starts feeling laggy, and especially if you check your computer's resources and see, hang on a moment, why is my RAM resource consumption so much? Or why is my hard drive or CPU being used so much? You've got nothing else running on the PC but yet your resource consumption is through the roof. That could technically be an indicator of malicious activity. It's not necessary to say that it is. There's been a couple of times when I would see my hard drive is extremely busy and then if I look deeper, I'll see, okay, you know what, it was an antivirus scan. So, it could be something legitimate, but it is an indicator of potential malicious activity. Of course, you'll have to look deeper to verify if this is the case.`,
              `Indicators could be your file system. Specifically, if you are now randomly blocked from content, stuff that you normally have access to, especially if you are the main administrator, stuff that you're supposed to have access to, but now you can't access your own data even, that is not good. So this could be an indicator of some sort of malicious activity. Maybe it's ransomware, maybe it's something less serious, you don't know.`,
              `Indicators could be resource inaccessibility, whether it be local files and documents on the machine itself or resources on the network. Both of these are indicators of malicious activity.`,
              `Indicators could be account compromise. If you suddenly can't log into your account, you did not change your password, but maybe you get kicked out, let's say from your on-premises Active Directory account, and it says something along the lines of you've logged in from somewhere else, but you know you have not. These are all symptoms of some potential malicious activity. So, one of the first things you want to do there is change your password.`,
              `Other places you may or may not see this is, let's say, your Google account. Google is pretty big on this, guys. If you suddenly sign in from a new device or a new location or anything funky and weird like that, they'll send a notification and ask you, hey, is this you? Have you just signed in from a new location or a new device or a new IP address or a new this or a new that? Sometimes it's annoying and sometimes it's pretty cool to do that. So more often than not, it's actually going to be annoying when they do that.`,
            ].join("\n\n"),
            example:
              "A user reports a changed browser homepage, unexplained CPU usage, inaccessible files, and an unfamiliar sign-in alert; the analyst verifies whether updates or antivirus scans explain the behavior before treating it as compromise.",
          },
        ],
      },
      {
        heading: "Physical and Network Attack Indicators",
        subheadings: [
          {
            heading: "Physical Attacks",
            content: [
              `Here we have brute force: this could mean I can physically go and park in your way, go put something in your way (physical denial of service). It could be physically breaking into something or some place. It could mean I can physically go and break into your premises or break into a cabinet. It could be a server cabinet or just a normal cabinet.`,
              `Here we have environmental attacks. This could be me cutting the power lines. So maybe the power lines are outside your building so I can bring down your service. Maybe I'm going to hope that you don't have backup generators in place. Environmental attacks could be me cutting the power cables outside the building, cutting the fiber cables so that your internet goes down, or sabotaging the cooling to your service.`,
              `Here we have RFID cloning and skimming. That's becoming more of a problem these days, which is why more and more companies and institutions are moving away from cards, including the banks. We are slowly moving away from cash, but at the same time, we're moving away from bank cards. This is not just about bank cards; this is about those cards you'll have near those sensors by the doors and then they'll open the doors.`,
              `Radio Frequency Identification (RFID) is a means of encoding information into passive tags. When a reader is in range of the tag, it produces an electromagnetic wave that powers up the tag and allows the reader to collect information from it. This technology can be used to implement contactless building access control systems. So, it's very common to find these in buildings. If you get to a door and only you are allowed to have access through that door, you might be asked for a fingerprint, a PIN, or in some cases a card. You've got to hover the card near a certain sensor by the door and if you bring it within a certain range, you're going to see the door unlock itself.`,
              `We've got near-field communication (NFC), which is very popular amongst banking cards. Tap and go, that comes to mind.`,
              `All of this comes down to contactless cards, badges, and fobs. Fobs you might, for example, find near certain boom gates, you know, certain residential areas. So, if you have a fob and you hold it near a certain place by the gate, the gate's going to open itself as an example. You get badges as well. Sometimes certain badges are not just for show, but if you hold them near a sensor, it actually opens the door for you.`,
            ].join("\n\n"),
            example:
              "An attacker clones an RFID badge to enter a restricted office, while another cuts a building's fiber line to disrupt service; access logs and physical monitoring can help investigate both events.",
          },
          {
            heading: "Network Attacks",
            content: [
              `For example, if I have now been hired to break into your company's network, or even if I'm just doing it on my own, I might not just outright go and hack you because I don't have enough information about you, your company, your network, and your security. So often what we'll go and do is what we call reconnaissance, a little credential harvesting. So I'm going to do research. I'm going to get all my ducks in a row. This could take days, it could take weeks, it can even sometimes take months for me to go and do my reconnaissance.`,
              `I'm going to go and check for patterns. I'm going to go and check when do your users log in, when do they log out, what days do they work, how long are they logged in for at a time, where do they normally log in from, how do they normally log in, is it via laptops and tablets. I'm going to check, okay, do you have multi-factor authentication? If so, what kind of authentication do you use? You get the idea. I'm going to go and check your environment out for a while. Once I know your environment and understand your environment and security, then I can start making my plans on how am I going to abuse this and get past all of that security of yours.`,
              `So, after I've done my reconnaissance, I can then potentially cause what we call a denial-of-service attack. This could be where I deny you access to a certain website or deny you access to a certain server. This could be an internal website or server, it could be a public website or server.`,
              `If I go and do reconnaissance I can also weaponize what I've found. I can use that information to gain access to your environment and then deliver maybe some sort of ransomware, some sort of virus, some sort of spyware, or I can just break into your environment to do what we call data exfiltration, which means I'm going to steal some of your information. Outsiders, outside hackers, are often very keen on getting a hold of system data. Some companies more than others, depending on what line of industry your business is in. So we will sell that to the highest bidder or hold it over your head as blackmail, in exchange for money. So generally, guys, it involves a lot.`,
              `Reconnaissance could also be something as simple as me walking around your office, going through your bin and doing what we call dumpster diving, and me finding credentials and stuff maybe on a sticky note. So that could also be part of credential harvesting. I can then later use that and weaponize it to gain access or deliver some sort of malware or maybe just steal data from your company.`,
            ].join("\n\n"),
            example:
              "An attacker studies employee log-in patterns, finds credentials in discarded notes, and later uses them to access a server or exfiltrate company data.",
          },
          {
            heading: "On-Path Attacks",
            content: [
              `On-path attacks, sometimes referred to as man-in-the-middle, involve a threat actor positioned between two hosts. You may or may not be one of these two hosts. Somebody or something, normally it's somebody, will be in the middle. We call this a man in the middle. It's quite common for them to use some sort of packet sniffer, something like Wireshark; they will capture your packets or your data in the hopes of getting something sensitive, something of value. This could potentially be a password, maybe they're looking for a token that they can use in what we call a replay attack. They can target forwarding protocols at different network layers.`,
              `You also get something called Address Resolution Protocol (ARP) poisoning. This is broadcasting unsolicited ARP replies to poison the cache of local hosts with spoofed MAC addresses. The attacker usually tries to masquerade as the default gateway in some cases. So we're basically tricking your device and your network devices into thinking one thing when something is something else. We're poisoning your address cache in your network, so it's going to think, oh, this is the default gateway. Meanwhile, I'm pretending to be the default gateway because I want all of that traffic to go through me or my device so I can capture information.`,
              `Now speaking of networks and all of that guys, you get what we call wireless attacks.`,
            ].join("\n\n"),
            example:
              "An attacker poisons a host's ARP cache to impersonate the default gateway, then captures traffic with a packet sniffer in an attempt to obtain credentials or replay a token.",
          },
          {
            heading: "Wireless Attacks",
            content: [
              `Rogue access points: These are also referred to as evil twins, which pretend to be real access points. But it's not something we see that often in the real world. If there is a rogue access point, it's generally an accident. It's very rare that you'll find a malicious access point deliberately labeled the same. A rogue access point occurs when an attacker sets up a malicious router and names its SSID to match a trusted network. They might even knock your devices offline on purpose; when users try to reconnect, they inadvertently join the fake network instead of the real one, giving the attacker a direct pipeline to intercept traffic.`,
              `What exactly happens at that point, I can't say for sure; it depends on the attacker, but something I've seen that happens quite commonly is they'll dig in your cookies, look for passwords and usernames, look for tokens, and just in general dig around your PC for stuff they're not supposed to. So, these rogue access points can basically be used for launching on-path attacks, those man-in-the-middle attacks. If you think about it, it's essentially a device between the user and the network they want to connect to, so it's literally in the middle. The user thinks they're connecting to the real access point or router, meanwhile they're on the hacker's fake one, so it's literally an on-path attack if you think about it.`,
              `These things tend to cause what we call denial of service, sometimes on purpose, sometimes by accident. So, if the user goes and connects to the wrong network, yes, the hacker will gain access to their usernames and passwords and tokens. But by accident, since they're on the wrong access point here, they obviously will not have access to the real network now because they're on the wrong network. They're not going to have access to the internet, they're not going to have access to their own server, so this could be an accidental denial of service. Other times it's on purpose. They will purposely go and jam the signal or disassociate the device from the network to try and force the user and the device to manually reconnect. They're going to go and, well, you guess what, they're going to connect to the wrong network.`,
            ].join("\n\n"),
            example:
              "A fake access point copies the office Wi-Fi name; a user reconnects to it, allowing the attacker to inspect traffic while the user loses access to the legitimate network.",
          },
          {
            heading: "Password Attacks",
            content: [
              `I'm going to mention four here today, but this is not all of them. These four are just simply four of the main ones and the most well-known ones. I'm going to start with what is known as a dictionary attack. A dictionary attack is something that's nearly extinct almost, not completely. This kind of password attack is going to use literally the words in the dictionary to try and guess your password. Now, that doesn't exactly work anymore these days. Why, you ask? Well, if you look at it, guys, almost all websites and platforms these days force you and the user to use a complex password. They will normally force you to have a password that's at least eight characters long, uppercase, lowercase, numbers, and symbols. So, the password for you or the user is not going to be an actual word. So, if it's not an actual word, that means you won't be able to find it in a dictionary. In other words, the dictionary attack won't actually work. That doesn't mean that this attack won't work at all. It does still work in some rare instances. For example, if you look at a normal desktop or laptop where you've installed Windows 10 or 11, a machine that is not on a domain, that machine could have a blank Windows password or it can have a normal password. It allows you to have a stupid word as a password. In those cases, yes, a dictionary attack might work. There are still a couple other platforms and devices out there as well where it might prove to work, but for the most part, this attack almost never works. I wouldn't really worry about that one.`,
              `Rainbow table attack. That is when you, the hacker, or me, we've got a predefined list of passwords that we know is very likely to get a hit on whatever it is we're trying to break into, whether it be a website, a device, or a platform, whatever. This list can honestly be as short as just 10 passwords long, guys. It could literally just have 10 passwords, it could have a hundred passwords. So if you know someone or something very well, you'll know what passwords to put in there. So if I am, for example, attacking your router, I might populate this rainbow table of mine with all the default factory passwords that routers normally use. And if you go and use the default password, then I'm going to be in. Another reason for you to always change the default password now you know, because we can use what we call a rainbow table attack against that router or whatever this device might be. If I understand you very well or I know you personally, and I know who your loved ones are and where you work and what your birthday is and the birthdays of your loved ones, all kinds of personal details like that, I can add all of those details into my rainbow table and use those as potential passwords. You never know. You can just populate it with passwords that are very commonly used in the industry for this kind of platform.`,
              `A brute-force attack is to guess the password. Yes, I could go and guess your password to your account or your device as a human being, but normally that's not what we mean by brute force. It includes that, yes, but normally when we go and do brute force, guys, it's probably some sort of software that's going to be cracking your password. It's going to try and guess your password, all the possible combinations. Now this is where it becomes very important for you to have a very long, complex password. The longer your password is, the longer it will take to crack that password. Not only should you have different kinds of characters in your password, you should have as many characters as possible in your password. The longer the password, the longer it takes to crack said password, guys. I'm going to need a lot more processing power to crack that password of yours.`,
              `A password spray attack: You can think of this as shooting a shotgun shell at a target. If I just shoot a normal bullet, chances are I might miss the target because it's just one single bullet. But if you shoot a shotgun shell at your target, chances are you're probably going to hit it because it sprays lots of little pebbles and one of these is bound to hit that target, don't you think? Now guys, keeping that in the back of our minds when I explain this, if I go to your environment and try and break into any one of your user accounts, I'm going to go to, let's say, user one. Let's say user one is called Adele. I'm going to try a specific password on Adele's account and if it doesn't work, I'm literally going to go to the next account. Maybe the next account's Bob. I'm going to go to Bob's account, I'm going to try that exact same password again. Then I'm going to go to Mary Joe, then Samantha, then Steven. I'm going to keep going to different accounts, I'm going to keep trying that same password over and over and over on everybody's account. And sooner or later, I'm going to get a hit. It might not be the first account, the third account, the fifth account, or the 10th account, but sooner or later, I will get a hit. People doing these password spray attacks, guys, will normally use a password that is very likely to get a hit. It'll probably be a password that you normally find on a rainbow table attack. It's a password that they know is very likely to get a hit with you or this platform or this company. So you need to understand your target to be able to use a password spray attack.`,
            ].join("\n\n"),
            example:
              "An attacker uses one likely password across many accounts in a spray, while a brute-force attack tries many possible combinations against a password; lockout policies and strong unique passwords help reduce risk.",
          },
        ],
      },
      {
        heading: "Application Attack Indicators",
        subheadings: [
          {
            heading: "Application Attacks",
            content: [
              `These are attacks that target vulnerabilities in application code, architecture, or design. An application attack targets a vulnerability in your operating system or application software. An application vulnerability is a design flaw that can cause the application security system to be circumvented or cause the application to crash.`,
              `There are broadly two main scenarios for application attacks:

- The first one is compromising the operating system or third-party apps on a network host by exploiting Trojans, malicious attachments, or browser vulnerabilities. This allows the threat actor or hacker to obtain a foothold on a local network.
- The second scenario is compromising the security of a website or a web application. This allows the threat actor to gain control of a web host and either steal data from it or use it to try and penetrate further into the network later down the line.`,
              `Something else you need to be aware of when we talk about application attacks is privilege escalation. Here the purpose of most application attacks is to allow the threat actor to run their own code on a system. This is referred to as arbitrary code execution. When the code is transmitted from one machine to another, it can be referred to as remote code execution. The code would typically be designed to install some sort of backdoor or disable the system in some sort of way normally.`,
              `An application or process must have privileges to read and write data and execute functions. Depending on how the software was written, a process may run using system accounts, the account of the logged-on user, or a nominated account. So, it depends on how the software was actually written.`,
            ].join("\n\n"),
            example:
              "An attacker exploits a web application's design flaw to execute code on its host, then attempts privilege escalation to access data beyond the web process's normal permissions.",
          },
          {
            heading: "Replay Attacks",
            content: [
              `This is resubmitting or guessing authorization tokens. We've had quite a few variations of replay attacks. One would be where they might execute some form of man-in-the-middle attack. They will capture your information in the middle using some form of packet sniffer like Wireshark in the hopes of getting something of value, something sensitive, like a username and password or a token. When they get that token, they can execute a replay attack, basically re-establish that session as if they are you.`,
              `In the context of web applications, a replay attack most often means exploiting cookie-based sessions (session management cookies). HTTP is normally a stateless protocol, meaning that the server preserves no information about the client. So, to overcome this limitation, mechanisms such as cookies have been developed to preserve stateful data. These actors like to get a hold of that data. A cookie is created when the server sends an HTTP response header with the cookie data. A cookie has a name and value plus optional security and expiration attributes. Subsequent request headers sent by the client will usually include the cookie.`,
              `Cookies are either non-persistent cookies, in which case they are stored in memory and deleted when the browser instance is closed, or they are persistent, in which case they are stored in the browser cache until deleted by the user or pass a defined expiration period date. We need to be careful of these cookies. You'll see a lot of people keep telling you, be careful when you tell your browser to store cookies. Be very careful. Never tell your browser to remember passwords for any websites you log into. And if you don't want your browser to store your history, maybe use a private browsing session. If you go look at Chrome, it's called Incognito. If you're using Firefox, it's called private browsing. If you're using Internet Explorer, it's called InPrivate. If you're using Edge, it has an InPrivate mode. But if you force your browser to browse in HTTPS, in that case, your browser will then not store any cookies and it's an encrypted browsing session. It's a lot safer in many ways.`,
              `A replay attack could be something like a cookie that was obtained, which has a token maybe in it, and they want to use this to obtain an authenticated session (replay cookie to obtain authenticated session). They want to log into a session as if they are you.`,
            ].join("\n\n"),
            example:
              "An attacker captures a session cookie and reuses its token to impersonate the user; secure cookie attributes, HTTPS, and session expiration help limit replay risk.",
          },
        ],
      },
      {
        heading: "Career Applications and Review Questions",
        subheadings: [
          {
            heading: "Professional Resume Bullets and Detection Tools",
            content: [
              `Professional Resume Bullets (X-Y-Z Method)

- Engineered a centralized Wazuh SIEM monitoring architecture utilizing custom XML decoders and correlation rules to parse and analyze 15,000+ daily log events, successfully detecting abnormal resource consumption, browser alterations, and covert ransomware notification indicators.

Related SIEM platforms and detection approaches:
- Splunk Enterprise Security: Use Splunk's SPL engine for correlation searches across high-volume log streams (SPL correlation searches).
- Microsoft Sentinel: Use cloud-native SIEM analytics powered by Kusto Query Language (KQL analytics rules).
- Google Cloud Chronicle SIEM: Use hyperscale security analytics driven by YARA-L detection rules.
- Elastic Security (ELK Stack) SIEM: Use structured Elasticsearch indices, Kibana dashboards, and detection rules (Elastic Agent telemetry and detection rules).

Roles: SOC Analyst and Detection Engineer.`,
              `- Performed deep artifact analysis on intercepted HTTP session cookies and network packet captures using Wireshark to mitigate token-harvesting vectors and prevent unauthorized replay attacks.

Related network analysis tools:
- TShark: Use the command-line network analyzer for scriptable, automated packet dissection and log pipeline extraction.
- NetworkMiner: Use the network forensic analysis tool (NFAT) for passive artifact extraction, credential harvesting detection, and session file reconstruction.
- Zeek, formerly Bro: Use the network analysis framework to generate structured connection logs and detect anomalous protocol behaviors.
- Tcpdump filter: Use the lightweight command-line packet capture utility for real-time header inspection and traffic filtering.

Roles: Cyber Operations and Security Engineering.`,
              `- Configured Suricata and SafeLine Web Application Firewall rule sets to inspect application-layer traffic, blocking arbitrary code execution attempts, privilege escalation, and session hijacking.

Related WAF and application protection options:
- Snort (by Cisco) and AWS WAF: Use Cisco's open-source detection engine alongside cloud-native web application firewalls.
- Palo Alto Networks Threat Prevention and Prisma Access WAF: Use next-gen firewall security profiles and cloud WAF controls.
- Suricata and Cloudflare Enterprise WAF and Managed Rulesets: Use edge-based proxy security and custom WAF managed rules.
- Suricata and ModSecurity with OWASP Core Rule Set (CRS): Use open-source web application firewall engines deployed on a reverse proxy like Nginx or Apache.

Roles: Cyber Operations and Security Engineering.`,
              `- Conducted threat-hunting simulations utilizing Invoke-Atomic Red Team and PowerShell script block logging to identify malicious credential harvesting, rogue access point associations, and unauthorized lateral movement across endpoints.

Related adversary simulation and endpoint monitoring tools:
- MITRE Caldera and Sysmon Event Channels: Use automated adversary emulation systems alongside centralized system monitoring logs, utilizing MITRE Caldera and Sysmon event channels (Event ID 1, 3, 11).
- Metasploit Framework and Microsoft Defender for Endpoint (MDE): Use exploit testing platforms alongside EDR advanced hunting telemetry, utilizing Metasploit validation modules and Microsoft Defender for Endpoint Advanced Hunting queries.
- PurpleSharp and CrowdStrike Falcon Telemetry: Use enterprise-grade adversary simulation tools with cloud-native EDR logs, utilizing PurpleSharp automation and CrowdStrike Falcon endpoint telemetry.
- Manual Red Team Scripts and Windows Event Forwarding (WEF): Use custom execution scripts with centralized event collection pipelines, utilizing custom penetration scripts and centralized Windows Event Forwarding collectors.`,
              `Related threat emulation and SIEM combinations:
- Atomic Red Team and Splunk Enterprise Security: Use pre-packaged security control validation tests alongside enterprise SIEM queries, utilizing Atomic Red Team and centralized Splunk Enterprise Security correlation searches.
- Stratus Red Team and Microsoft Sentinel (KQL): Use cloud-native threat emulation tools paired with Azure SIEM analytics, utilizing Stratus Red Team and centralized Microsoft Sentinel KQL queries.
- Pangolin and Elastic Security (ELK): Use adversary emulation platforms alongside centralized Elasticsearch event pipelines, utilizing Pangolin and centralized Elastic Security log indices.
- Atomic Red Team and Wazuh FIM/Log Collector: Use structured open-source emulation tests alongside Wazuh manager alerts, utilizing Atomic Red Team and centralized Wazuh manager event collectors.

Role: Threat Hunter or advanced Security Analyst.`,
            ].join("\n\n"),
            example:
              "A detection engineer documents measurable SIEM coverage, uses packet and endpoint telemetry to investigate replay attempts, and validates application defenses with controlled red-team simulations.",
          },
          {
            heading: "Practice Review Questions and Answers",
            content: [
              `1. What defines a virus in contrast to broader umbrella categories of malicious software?

Answer: While malware is a broad umbrella term indicating something malicious is present, a virus is a specific type of malicious code designed to be harmful right from the start.`,
              `2. Why do IT professionals typically select custom or advanced installation settings instead of default options when deploying software?

Answer: Custom installations allow users to pick the install directory and untick boxes to block unwanted toolbars, software bundling, and browser homepage modifications introduced by PUPs and PUAs.`,
              `3. What mechanism do tracking beacons use to collect metadata and perform browser fingerprinting?

Answer: Beacons utilize a single-pixel image embedded into a website that forces the browser to make a download request, allowing the beacon host to collect metadata.`,
              `4. How do targeted keyloggers differ from full-capture keyloggers in terms of operational efficiency?

Answer: Targeted keyloggers specifically detect when a user is entering sensitive information or logging into an account, whereas full-capture variants record every single keystroke, generating an overwhelming volume of raw data that is tedious to sift through.`,
              `5. What is the operational distinction between cryptomining and crypto-malware (cryptojacking)?

Answer: Cryptomining is when an individual uses their own hardware resources to solve complex mathematical equations for cryptocurrency rewards, whereas crypto-malware covertly hijacks a victim's system resources to perform cryptomining for someone else's financial gain.`,
              `6. What physical attack vector involves encoding passive tags that produce electromagnetic waves to power up when a reader is in range?

Answer: Radio Frequency Identification (RFID) technology, which is commonly used to implement contactless building access control systems, badges, and fobs.`,
              `7. How does Address Resolution Protocol (ARP) poisoning function during a network attack?

Answer: ARP poisoning involves broadcasting unsolicited ARP replies to poison the cache of local hosts with spoofed MAC addresses, allowing the attacker to masquerade as the default gateway to capture traffic.`,
              `8. What primary risk is associated with rogue access points, also known as evil twins?

Answer: Rogue access points mimic trusted network SSIDs to trick devices into connecting, giving attackers a direct pipeline to launch on-path attacks, harvest credentials, and inspect browser cookies.`,
              `9. Why are traditional dictionary attacks largely ineffective against modern platforms?

Answer: Modern platforms and websites force users to create complex passwords consisting of uppercase letters, lowercase letters, numbers, and symbols that are at least eight characters long and do not correspond to actual dictionary words.`,
              `10. What is the primary purpose of a password spray attack?

Answer: An attacker attempts a single, highly probable password across many different user accounts sequentially (such as checking Adele, then Bob, then Mary Joe) to eventually secure an account hit without triggering account lockout thresholds on a single username.`,
            ].join("\n\n"),
            example:
              "A trainee distinguishes a worm from a user-executed virus, recognizes a beacon and ARP poisoning, and explains how a password spray differs from brute force.",
          },
        ],
      },
    ],
  },
];
