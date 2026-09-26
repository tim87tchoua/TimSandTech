type AnswerGuide = { definition: string; example: string };

const guideEntries: Record<string, AnswerGuide> = {
  "Network Service Discovery (T1046)": {
    definition:
      "Finding services and open ports on systems to learn what is available on a network.",
    example:
      "A host sends connection probes to ports 22, 80, and 443 across a subnet.",
  },
  "Exploitation for Client Execution (T1203)": {
    definition:
      "Using a software vulnerability to run code in a client application or process.",
    example: "A crafted document triggers a flaw in a user's document reader.",
  },
  "Remote Services (T1021)": {
    definition:
      "Accessing another system through a remote service such as RDP, SMB, or SSH.",
    example:
      "An intruder uses stolen credentials to open an RDP session on a server.",
  },
  "Brute Force (T1110)": {
    definition:
      "Repeatedly trying passwords or other credentials to gain account access.",
    example:
      "An actor tests common passwords against multiple employee accounts.",
  },
  "Disable the account, revoke active sessions, and preserve authentication logs":
    {
      definition:
        "Contain a potentially compromised identity while retaining records for investigation.",
      example:
        "Suspend the targeted account, invalidate its tokens, and export sign-in events.",
    },
  "Block the successful ASN and delete the account's sign-in history": {
    definition:
      "Block traffic by its network origin; deleting logs removes useful evidence.",
    example:
      "An ASN block may stop one route, but the actor could retry through another provider.",
  },
  "Wait for a second successful sign-in before taking action": {
    definition:
      "Delay containment until another suspicious authentication event occurs.",
    example:
      "A compromised session remains active while analysts wait for another login.",
  },
  "Reset every user's password without validating scope": {
    definition:
      "Apply a broad credential reset without confirming which identities are affected.",
    example:
      "Changing all employee passwords can disrupt operations while leaving active tokens valid.",
  },
  "Isolate the endpoint and capture volatile evidence": {
    definition:
      "Limit a host's network access and preserve short-lived system state for analysis.",
    example:
      "Quarantine the laptop and capture running processes and network connections before shutdown.",
  },
  "Reimage the endpoint before collecting artifacts": {
    definition:
      "Replace the system image before preserving files and runtime evidence.",
    example:
      "Reinstalling the operating system can erase the process and persistence artifacts investigators need.",
  },
  "Allow the process to finish to observe its final state": {
    definition:
      "Leave suspicious execution running so its later behavior can be observed.",
    example:
      "A command may continue downloading or launching additional payloads while it is monitored.",
  },
  "Disable the entire subnet's network switch": {
    definition:
      "Disconnect every device on a subnet, regardless of whether it is involved.",
    example:
      "A switch shutdown interrupts unrelated services and users alongside the affected host.",
  },
  "Endpoint logon events correlated with SMB process and network telemetry": {
    definition:
      "Join authentication records with the processes and connections that followed them.",
    example:
      "Match a privileged logon on a workstation to the process that opened an SMB session.",
  },
  "A weekly external vulnerability scan report": {
    definition:
      "A periodic inventory of weaknesses visible from outside the organization.",
    example:
      "A report lists exposed services but does not show who signed in to an internal host.",
  },
  "A DNS blocklist without host-level timestamps": {
    definition:
      "A list of denied domains without a time-linked record of which endpoint queried them.",
    example:
      "A blocked domain appears in the list, but analysts cannot tie it to a workstation's SMB activity.",
  },
  "The domain controller's CPU utilization graph": {
    definition:
      "A time series showing processor load on the authentication server.",
    example:
      "A CPU spike shows workload change but does not identify the account or source host.",
  },
  Impersonation: {
    definition:
      "Pretending to be a trusted person or organization to persuade a target to take an action.",
    example:
      "A text sender claims to be the CEO and asks an employee to buy gift cards.",
  },
  Phishing: {
    definition:
      "A deceptive message intended to obtain sensitive information or prompt an unsafe action.",
    example:
      "An email imitates a bank and directs a user to a credential-harvesting page.",
  },
  "Spear Phishing": {
    definition:
      "Phishing tailored to a specific person or organization.",
    example:
      "An attacker uses an employee's name and job details in a targeted email.",
  },
  DoS: {
    definition:
      "A denial-of-service attack makes a service unavailable to its intended users.",
    example:
      "A server is overwhelmed with requests and cannot respond to legitimate clients.",
  },
  Active: {
    definition:
      "A direct interaction with a target, such as scanning its ports or services.",
    example:
      "A penetration tester sends probes to discover services on a client network.",
  },
  Passive: {
    definition:
      "Indirect information gathering that does not directly interact with the target system.",
    example:
      "An analyst reviews public documents and websites without scanning the target network.",
  },
  "Memory injection": {
    definition:
      "Placing or executing code within the memory space of a running process.",
    example:
      "Malicious code is injected into a legitimate process to evade controls.",
  },
  "Jailbreaking": {
    definition:
      "Removing restrictions from an Apple mobile device to allow unauthorized software or features.",
    example:
      "A user modifies an iPhone to install apps outside the official App Store.",
  },
  Rooting: {
    definition:
      "Gaining elevated administrative access to an Android device.",
    example:
      "A user roots a phone to change protected system settings and gain full control.",
  },
  "Side Loading": {
    definition:
      "Installing software from a source other than the platform's approved store.",
    example:
      "An Android user installs an application package downloaded from a website.",
  },
  "Proxy Server": {
    definition:
      "An intermediary that handles requests, often filtering internal users' access to external resources.",
    example:
      "A web proxy blocks an employee's request to visit a prohibited website.",
  },
  "Jump Server": {
    definition:
      "An authenticated intermediary host used to reach protected systems on another network.",
    example:
      "An administrator signs in to a hardened bastion host before accessing a production server.",
  },
  Hypervisor: {
    definition:
      "Software or firmware that creates and runs virtual machines on a host system.",
    example:
      "A hypervisor allocates CPU and memory to several isolated virtual servers.",
  },
  "RDP Server": {
    definition:
      "A server that allows clients to establish remote desktop sessions using Remote Desktop Protocol.",
    example:
      "An employee connects remotely to a workstation through an RDP session.",
  },
  "Access-list inbound deny ip source 10.2.5.11/32 destination 0.0.0.0/0": {
    definition:
      "An inbound rule that denies packets from the specific source address to any destination.",
    example:
      "The rule blocks traffic originating from 10.2.5.11 from reaching the organization's network.",
  },
  Transfer: {
    definition:
      "A risk response that shifts some financial consequences to another party, commonly through insurance.",
    example:
      "An organization purchases cyber insurance to transfer specified incident costs to an insurer.",
  },
  "Full disk": {
    definition:
      "Encryption that protects the entire storage volume on a device.",
    example:
      "BitLocker encrypts an employee laptop so a thief cannot read its stored files.",
  },
  Honeypot: {
    definition:
      "A decoy system or resource used to attract, detect, and study unauthorized activity.",
    example:
      "A fake server records probes from an attacker without exposing a production server.",
  },
  "Nation-State Actor": {
    definition:
      "A threat actor employed, sponsored, or directed by a government or state entity.",
    example:
      "A government-backed group targets another country's energy infrastructure for strategic gain.",
  },
  Salting: {
    definition:
      "Adding a unique random value to a password before hashing it.",
    example:
      "Two users with the same password receive different stored hashes because each hash uses a different salt.",
  },
  Certification: {
    definition:
      "A vendor-issued record, such as a certificate of destruction, documenting secure media disposal.",
    example:
      "A disposal provider certifies that a classified storage array was securely destroyed.",
  },
  Purple: {
    definition:
      "A collaborative security team approach that combines Red Team offense with Blue Team defense.",
    example:
      "Red Team testers share attack findings with Blue Team defenders to improve detections.",
  },
  "Scheduled downtime": {
    definition:
      "A prearranged maintenance period when services are intentionally taken offline.",
    example:
      "Administrators schedule a server upgrade after business hours to reduce user impact.",
  },
  "Having a blackout plan when a patch fails": {
    definition:
      "A documented contingency for restoring service if a change or patch causes a major outage.",
    example:
      "A team keeps standby equipment and rollback steps ready before deploying a risky patch.",
  },
  Ransomware: {
    definition:
      "Malware that typically encrypts data and demands payment to restore access.",
    example:
      "A ransom note demands cryptocurrency after a workstation's files are encrypted.",
  },
  "Confidentiality": {
    definition:
      "The security principle that restricts information access to authorized users with a need to know.",
    example:
      "Role-based permissions prevent employees outside a client team from opening its files.",
  },
  Firewall: {
    definition:
      "A network security control that filters traffic according to configured rules and can record connections.",
    example:
      "An analyst reviews firewall logs for outbound connections to a command-and-control address.",
  },
  Warm: {
    definition:
      "A recovery site with preconfigured infrastructure that requires some activation or synchronization.",
    example:
      "A company powers on and synchronizes a warm site after an outage.",
  },
  "Business Continuity": {
    definition:
      "Planning for how an organization will continue critical operations during a disruption.",
    example:
      "A continuity plan uses backup power and connectivity to keep essential services running.",
  },
  "Shadow IT": {
    definition:
      "Hardware, software, or services used without the knowledge or approval of the organization's IT function.",
    example:
      "A department adopts a project-management service without informing security or IT.",
  },
  "Unidentified Removable Devices": {
    definition:
      "Unapproved removable storage, such as unknown USB drives, that can be used to copy data out of an organization.",
    example:
      "An insider copies client files to an unauthorized USB drive before leaving the company.",
  },
  "False positive": {
    definition:
      "A detection that reports a condition which is not actually present.",
    example:
      "A scanner reports a vulnerability, but verification shows the affected software is not installed.",
  },
  "Lessons Learned": {
    definition:
      "The post-incident review phase that documents findings and improves future response.",
    example:
      "The response team records the incident timeline and updates its playbook after containment and recovery.",
  },
  "Vulnerability Scan": {
    definition:
      "An automated assessment that identifies known weaknesses and outdated assets in systems.",
    example:
      "A scan reports endpoints running unsupported operating systems.",
  },
  "Remove Unnecessary Services": {
    definition:
      "A hardening measure that disables services not required for a system's role.",
    example:
      "An administrator removes an unused file-sharing service from a server to reduce its attack surface.",
  },
  "Disable Default Accounts": {
    definition:
      "A hardening measure that disables or secures vendor-provided accounts that could be targeted with known credentials.",
    example:
      "An administrator disables the default admin account and provisions named accounts with controlled privileges.",
  },
  "Internal Auditing": {
    definition:
      "A recurring internal review of systems, processes, and compliance evidence.",
    example:
      "Auditors review access records and procedures monthly before an external attestation.",
  },
  "Cold Site": {
    definition:
      "A low-cost recovery location with little or no preinstalled infrastructure, requiring significant setup after a disaster.",
    example:
      "A company brings equipment and configures systems at an empty alternate facility after an outage.",
  },
  "Security Awareness Training": {
    definition:
      "Instruction that helps users recognize and safely respond to security threats.",
    example:
      "Employees practice checking suspicious links and reporting spoofed websites.",
  },
  "Red Team": {
    definition:
      "An authorized offensive security team that simulates attacks to test defenses.",
    example:
      "Red Team testers attempt to exploit a known weakness under approved rules of engagement.",
  },
  "Full Disk Encryption": {
    definition:
      "Encryption that protects all data on a device's storage volume when the device is powered off or locked.",
    example:
      "A company enables FileVault or BitLocker on every corporate laptop.",
  },
  "The software contained a backdoor": {
    definition:
      "The software installed a covert access mechanism that can allow remote access while bypassing normal authentication.",
    example:
      "A trojanized download opens an outbound connection to an attacker-controlled host on an unusual port.",
  },
  "Dumpster Diving": {
    definition:
      "Searching discarded materials for useful or sensitive information.",
    example:
      "An attacker checks a printer-side waste bin for discarded passwords or client documents.",
  },
  RAM: {
    definition:
      "Volatile working memory whose contents are generally lost when power is removed.",
    example:
      "A forensic examiner captures RAM before shutting down a suspected workstation.",
  },
  "Disk Encryption": {
    definition:
      "Encryption of a disk or volume to protect data stored on a device.",
    example:
      "A stolen laptop remains unreadable because its disk is encrypted with BitLocker or FileVault.",
  },
  PIN: {
    definition:
      "A secret numeric code, representing something a user knows.",
    example:
      "A user enters a PIN after presenting a smart card, combining knowledge and possession factors.",
  },
  Sensor: {
    definition:
      "A device that detects a physical condition or movement and can trigger an alert.",
    example:
      "A motion sensor activates an alarm when someone enters a restricted room.",
  },
  "Conditional access policies": {
    definition:
      "Rules that grant or deny access based on conditions such as location, device compliance, or authentication strength.",
    example:
      "A cloud service allows access only from a compliant device using MFA and an approved location.",
  },
  "Implementation of additional authentication factors": {
    definition:
      "Requiring more than one independent authentication factor to reduce the value of stolen credentials.",
    example:
      "A user must provide a password and approve a prompt in an authenticator app.",
  },
  Snapshot: {
    definition:
      "A point-in-time capture of a virtual machine's state that can be used to revert it later.",
    example:
      "An administrator takes a VM checkpoint before a risky update and rolls back if the update fails.",
  },
  Decommissioning: {
    definition:
      "Formally removing an unused asset from service and disposing of it securely.",
    example:
      "IT removes unused, non-compliant desktops from the network and sanitizes their disks before disposal.",
  },
  Sanitization: {
    definition:
      "A repeatable process for removing data from storage media while retaining reuse when the method and medium allow it.",
    example:
      "An organization securely overwrites a reusable drive and records the sanitization result.",
  },
  "Supply Chain": {
    definition:
      "Risk introduced through third-party products, services, or dependencies used by an organization.",
    example:
      "A compromised vendor update distributes malicious code to many customer organizations.",
  },
  "Illumination Tool": {
    definition:
      "A tool for mapping and visualizing supply-chain relationships, dependencies, and third-party risk.",
    example:
      "An analyst maps direct and indirect vendors to identify hidden dependencies and exposure.",
  },
  "Open-source Intelligence": {
    definition:
      "Collection and analysis of information available from public sources.",
    example:
      "An analyst reviews public records and company websites without accessing proprietary systems.",
  },
  "A disruption of business operations": {
    definition:
      "An unintended interruption caused by assessment activity against live systems.",
    example:
      "An aggressive scan overloads a fragile production service and interrupts users.",
  },
  "Creating a false text file in /docs/salaries": {
    definition:
      "A honeyfile: a decoy document used to alert defenders when someone accesses it.",
    example:
      "Opening a fake salary file generates an alert for investigation of a possible insider threat.",
  },
  "Digital Signatures": {
    definition:
      "Cryptographic evidence used to verify a message's authenticity and integrity.",
    example:
      "A recipient verifies a digital signature to detect whether a signed document was changed.",
  },
  Generator: {
    definition:
      "A fuel-powered source of backup electrical power for extended outages.",
    example:
      "A data center runs backup generators with stored fuel during a multiday utility failure.",
  },
};

export const answerGuides: Record<string, AnswerGuide> = new Proxy(
  guideEntries,
  {
    get(target, key: string) {
      return (
        target[key] ?? {
          definition: `${key} is one of the answer options; compare it with the analyst rationale for this question.`,
          example:
            "Use the scenario details and analyst rationale to determine whether this option applies.",
        }
      );
    },
  },
);
