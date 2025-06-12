import React, { useState, useEffect } from 'react';
import './Timeline.css'

const signs = [
{
  id: 1,
  title: 'The Coming of Prophet Muhammad ﷺ',
  realized: true,
  date: '610 CE',
  article: `The coming of Prophet Muhammad ﷺ marks one of the most significant events in human history. His arrival was foretold in previous scriptures, and his mission as the final messenger completed the chain of prophethood that began with Adam (peace be upon him). Born in 570 CE in Mecca, Muhammad ﷺ was known even before prophethood as Al-Amin, "the trustworthy," for his noble character and honesty. At the age of 40, while meditating in the cave of Hira, he received his first revelation through the Angel Jibril (Gabriel). These divine revelations continued for 23 years and were eventually compiled into the Qur'an, the final and unaltered word of Allah.

The Prophet's mission was not limited to delivering the scripture. He exemplified the highest standards of morality, kindness, justice, and humility. Through his personal conduct, he demonstrated how humanity should live in obedience to their Creator. Despite facing tremendous opposition, persecution, and hardship in Mecca, he remained steadfast in conveying the message of monotheism, urging people to abandon idolatry, injustice, and immorality.

His migration (Hijrah) to Medina marked the establishment of the first Islamic state, governed by divine law and principles of justice, equality, and mercy. In Medina, the Prophet ﷺ not only acted as a spiritual leader but also as a statesman, judge, military commander, and community organizer. His leadership brought unity among diverse tribes and established peace between long-feuding clans.

The Prophet’s teachings addressed all aspects of life: worship, family relations, trade, governance, warfare, and diplomacy. His Farewell Sermon, delivered during his final pilgrimage, encapsulated the essence of his message: equality of all humans regardless of race or status, the sanctity of life, property, and honor, and the finality of his prophethood.

One of the most profound impacts of his coming was the radical transformation of Arabian society. From a region plagued with tribal warfare, oppression of the weak, and rampant ignorance, Arabia became a beacon of justice, knowledge, and civilization that would later spread across continents.

The signs of the end times began with his coming, as he himself stated: "I and the Hour have been sent like these two," while raising his index and middle fingers together, indicating how close the Day of Judgment became with his prophethood. His coming thus initiated the era where the countdown towards the final Hour began. The global spread of Islam, the preservation of the Qur'an, and the millions of followers who continue to emulate his Sunnah are living testaments to his enduring legacy.

The coming of Prophet Muhammad ﷺ was not only a mercy for the believers but for all of mankind and even the universe. His mission brought light to the darkest corners of human behavior, and his legacy continues to guide over a billion Muslims worldwide towards righteousness and submission to the One God.`
},
{
  id: 2,
  title: 'The Death of the Prophet ﷺ',
  realized: true,
  date: '632 CE',
  article: `The death of the Prophet Muhammad ﷺ in 632 CE marked a pivotal moment not only for the Muslim Ummah but for all of human history. His passing signaled the end of divine revelation and the conclusion of prophethood. The Prophet had completed his mission of delivering the final message of Allah, and with his departure, a new phase of human history commenced — one in which the followers of Islam were tasked to carry forward the light of his teachings without his physical presence.

The Prophet's final illness began shortly after he returned from his Farewell Pilgrimage. During his last days, he continued to remind his followers of their duties toward Allah and each other. Despite his physical weakness, he led prayers until he was unable, after which Abu Bakr (may Allah be pleased with him) led the congregation at his request. His death came after a short but intense illness, in the arms of his beloved wife Aisha (may Allah be pleased with her).

The moment of his death was one of profound grief for his companions. Umar ibn al-Khattab (may Allah be pleased with him), unable to bear the loss, initially denied that the Prophet had passed, declaring that anyone who said so would be punished. However, Abu Bakr, with great wisdom and composure, reminded the community: "Whoever used to worship Muhammad, know that Muhammad is dead. But whoever worships Allah, know that Allah is Ever-Living and never dies." He then recited the verse from the Qur'an: "Muhammad is no more than a Messenger; many were the Messengers who passed away before him..." (3:144).

The Prophet’s death tested the young Muslim community’s faith and resilience. Leadership transitioned peacefully to Abu Bakr, the first Caliph, who took on the immense responsibility of preserving the unity of the Ummah, compiling the Qur'an, and maintaining the foundations laid by the Prophet ﷺ. 

The death of the Prophet also marked the official beginning of the end-times timeline. As he had taught, his coming and his death signified how close the Day of Judgment truly was. He often reminded his followers to remain vigilant, to stay firm upon the straight path, and to uphold the religion against the many trials that would emerge as the world approached its final days.

Despite his physical departure, the Prophet ﷺ left behind an unmatched legacy: the Qur'an, the Sunnah, and a global community of believers committed to preserving and practicing his teachings. His character, patience, mercy, and justice continue to inspire generations of Muslims. His death was not the end but the beginning of a timeless spiritual mission carried forward by his followers, who are charged with being witnesses unto mankind, spreading justice, mercy, and monotheism until the final Hour arrives.`
},
{
  id: 3,
  title: 'Splitting of the Moon',
  realized: true,
  date: '610 CE',
  article: `Among the greatest miracles performed by the Prophet Muhammad ﷺ was the splitting of the moon. This extraordinary event took place in Mecca before the migration to Medina, and it was witnessed by many of the Quraysh who had demanded a sign to prove his prophethood. The event is directly mentioned in the Qur'an in Surah Al-Qamar: "The Hour has drawn near, and the moon has been split." (54:1).

The disbelievers at the time had persistently challenged the Prophet ﷺ, asking him to demonstrate an undeniable sign from Allah to verify his claim. In response, by the will of Allah, the moon appeared to split into two distinct parts, with one half seen on one side of the mountain and the other half on the opposite side. The people of Mecca were astounded, but instead of believing, many accused the Prophet of sorcery, suggesting that he had bewitched their eyes. However, travelers from outside Mecca later confirmed that they too had witnessed this extraordinary phenomenon.

The splitting of the moon is one of the numerous miracles granted to the Prophet ﷺ, alongside others such as the Isra and Mi'raj (Night Journey), the flowing of water from his fingers, and the increase of food and provisions during times of need. The splitting of the moon was not only a supernatural occurrence but also a clear sign of the proximity of the Day of Judgment, as emphasized in the opening of Surah Al-Qamar.

For believers, this miracle served to strengthen their faith and conviction in the truth of the Prophet's message. It demonstrated that Allah had absolute control over the universe and that the Prophet ﷺ was indeed His chosen messenger. The event has been narrated in numerous authentic Hadiths, reported by multiple companions, including Abdullah ibn Mas'ud (may Allah be pleased with him), further confirming its occurrence.

Throughout history, scholars of Islam have upheld the authenticity of this miracle. While some modern critics have attempted to explain or deny the event through naturalistic interpretations, the consistent reports from various sources leave little room for doubt in the hearts of the believers. The splitting of the moon stands as a timeless sign of Allah's power and the truthfulness of the Prophet ﷺ.

This miraculous event also serves as a reminder of the fleeting nature of this world and the imminent reality of the Hereafter. Just as the moon split by the command of Allah, so too will the universe itself be torn apart on the Day of Judgment. The splitting of the moon, therefore, is not merely a historical miracle but a profound symbol of divine authority and the unfolding destiny of all creation.`
},
{
  id: 4,
  title: 'False Prophets (Musaylimah etc.)',
  realized: true,
  date: '7th century',
  article: `Shortly after the death of the Prophet Muhammad ﷺ, several individuals arose, falsely claiming to be prophets. This emergence of false prophets had already been foretold by the Prophet ﷺ himself, who warned that many deceivers would appear, attempting to mislead the believers and challenge the finality of his prophethood.

Among the most infamous of these was Musaylimah al-Kadhdhab, who hailed from the tribe of Banu Hanifa in the region of Yamamah. During the Prophet's lifetime, Musaylimah initially pretended to accept Islam but later declared himself a prophet, claiming that he too received revelations. He composed nonsensical verses that imitated the Qur'an, attempting to deceive his followers with fabricated signs. Many were drawn to his message due to tribal loyalties, promises of power, and his lenient laws.

Musaylimah's rebellion posed a serious threat to the unity of the young Muslim Ummah, especially after the Prophet's passing. The first Caliph, Abu Bakr (may Allah be pleased with him), led decisive campaigns known as the Ridda Wars (Wars of Apostasy) to suppress these rebellions. In the famous Battle of Yamamah, Musaylimah's forces were defeated by the Muslim army under the leadership of Khalid ibn al-Walid (may Allah be pleased with him). Musaylimah himself was killed, and his false prophethood was ended.

However, Musaylimah was not the only false prophet. Others, such as Sajah bint Al-Harith, Tulayha ibn Khuwaylid, and Al-Aswad Al-Ansi, also claimed prophethood during that tumultuous period. Al-Aswad, for example, declared himself a prophet in Yemen, leading many astray until he was assassinated shortly before the Prophet ﷺ passed away.

The phenomenon of false prophets did not end in the early centuries of Islam. Throughout history and even into modern times, individuals have continued to make similar claims, despite the clear teaching in Islam that Muhammad ﷺ is the Seal of the Prophets (Khatam an-Nabiyyin), and that no prophet will come after him. Belief in the finality of prophethood is a cornerstone of Islamic faith.

These false prophets serve as a warning for the Muslim community about the dangers of deviation, the susceptibility of people to follow charismatic but misguided leaders, and the importance of adhering strictly to the Qur'an and authentic Sunnah. Their appearance was not random but part of the trials and signs leading up to the final Hour, as foretold by the Prophet ﷺ.

The early struggles against these impostors solidified the unity and resilience of the Muslim community. Through the leadership of the rightly guided caliphs and the sacrifice of countless companions, the Ummah was able to remain steadfast, preserving the integrity of the faith for future generations.`
},
{
  id: 5,
  title: 'Loss of Trustworthiness',
  realized: true,
  date: 'Ongoing',
  article: `One of the signs of the approach of the Day of Judgment is the widespread loss of trustworthiness within society. The Prophet Muhammad ﷺ warned his followers that as the end of time draws near, trust (amanah) would become rare, and people would appoint unqualified individuals to positions of authority, leading to widespread corruption and injustice.

Trustworthiness is one of the most important ethical principles in Islam. The Prophet ﷺ himself was known as "Al-Amin" — the Trustworthy — even before receiving revelation. A person's ability to fulfill promises, safeguard rights, and uphold justice is central to their character and standing before Allah. The erosion of this virtue has dire consequences, both for individuals and entire societies.

In today's world, we witness numerous manifestations of this prophecy. Leaders who lack integrity are placed in positions of power, often driven by personal gain, greed, or political maneuvering rather than genuine service to the people. Corruption has become deeply entrenched in many governments, businesses, and institutions, where the interests of the few outweigh the rights of the many.

In the business world, dishonesty in transactions, fraudulent practices, and exploitation of workers have become widespread. Trust in financial systems has been eroded by frequent scandals, theft, and deception. Even within personal relationships, many struggle to find loyalty and sincerity, as betrayal and selfishness become increasingly normalized.

The Prophet ﷺ described this alarming trend, saying: "When trust is lost, then wait for the Hour." His companions asked: "How will it be lost, O Messenger of Allah?" He replied: "When authority is given to those who do not deserve it." (Bukhari)

The loss of trustworthiness extends beyond political and economic spheres. In the dissemination of knowledge, misinformation and deliberate distortions have become rampant. The spread of false information through modern media and social networks has made it difficult for people to discern truth from falsehood. As a result, societies have become more fragmented, and justice is often compromised.

Despite these troubling trends, Islam provides a clear remedy: to return to the teachings of the Qur'an and the Sunnah, and to uphold trust in every aspect of life. Believers are reminded that Allah will hold them accountable for every trust they betray and every promise they break. The Prophet ﷺ emphasized that one who is not trustworthy cannot be a true believer.

The increasing loss of trustworthiness is both a sign of the moral decline of humanity and a clear indication that the world is approaching its final phase. It serves as a call for the believers to remain steadfast, honest, and just, even when surrounded by widespread corruption, as they prepare for the eventual coming of the Hour.`
},
{
  id: 6,
  title: 'Widespread Ignorance',
  realized: true,
  date: 'Ongoing',
  article: `The Prophet Muhammad ﷺ foretold that one of the signs of the Last Day would be the spread of ignorance across the world. He said, "Among the signs of the Hour is the prevalence of ignorance and the disappearance of knowledge." (Bukhari, Muslim). In this context, ignorance refers primarily to ignorance of the religion — a lack of understanding of the Qur'an, the Sunnah, and the teachings that safeguard human morality and spiritual well-being.

Though humanity has seen extraordinary advancements in technology, science, and communication, true religious knowledge has declined dramatically. Many people today are highly educated in worldly matters but remain unaware or uninterested in the essential truths of their purpose in life, their Creator, and their obligations toward Him and His creation. This is the kind of ignorance the Prophet ﷺ warned of — not merely illiteracy, but spiritual and moral blindness.

One of the reasons for this decline is the loss of qualified scholars and sincere teachers who preserve the authentic teachings of Islam. Many so-called scholars today either distort the religion to suit worldly agendas or lack proper grounding in traditional knowledge. As a result, misleading interpretations, innovations, and extremism have surfaced, confusing many Muslims and leading others away from the truth altogether.

Moreover, the fast pace of modern life has shifted priorities. People often find little time for learning the Qur'an, studying Hadith, or deepening their understanding of fiqh (Islamic jurisprudence). Social media and entertainment dominate daily life, leaving little room for reflection, study, or remembrance of Allah.

The widespread ignorance is not limited to individuals; it also affects institutions. Educational systems in many Muslim countries fail to adequately teach Islamic principles, instead focusing largely on secular curricula. Children grow up without a proper understanding of their deen, leading to a generation that knows little about the obligations, manners, or purpose Allah has prescribed for them.

The Prophet ﷺ also warned that near the end of time, people would take ignorant individuals as leaders, who would give fatwas (religious verdicts) without knowledge, thus leading themselves and others astray. This prophecy is being witnessed today as unqualified people speak on matters of religion without proper scholarship, spreading confusion and falsehood.

Despite these challenges, the responsibility lies upon every believer to seek knowledge and to preserve authentic teachings. The Prophet ﷺ said: "Seeking knowledge is an obligation upon every Muslim." (Ibn Majah). True knowledge leads to humility, righteousness, and steadfastness upon the straight path.

The spread of ignorance, while being one of the clear signs of the Hour, serves as a test and a reminder. Those who strive to acquire sound knowledge and act upon it will be among those protected from misguidance. The decline of knowledge should motivate the believers to hold firmly to the Qur'an and Sunnah, guard the trust of knowledge, and preserve the teachings for future generations as the Hour approaches.`
},
{
  id: 7,
  title: 'Fornication Widespread',
  realized: true,
  date: 'Ongoing',
  article: `The Prophet Muhammad ﷺ prophesied that one of the unmistakable signs of the approach of the Hour would be the widespread occurrence of fornication (zina). He said: "Among the signs of the Hour is that zina will become widespread." (Bukhari). In the past, such acts were hidden due to the shame and consequences attached to them. However, in modern times, fornication has become increasingly public, normalized, and even celebrated.

In many societies, premarital and extramarital sexual relations are openly displayed in films, television shows, and social media. Laws and cultural norms that once protected family values have been gradually eroded. Instead of being viewed as immoral or destructive, fornication is often portrayed as a normal or even desirable part of modern life.

The rise of pornography has made illicit content widely accessible to people of all ages, contributing to the normalization of fornication and the distortion of human sexuality. This widespread exposure affects not only adults but also children and teenagers, reshaping their understanding of relationships and lowering moral standards.

Furthermore, fornication has many devastating consequences. It leads to broken families, emotional and psychological harm, unwanted pregnancies, and the spread of sexually transmitted diseases. The institution of marriage, which Islam seeks to protect and uphold, has been weakened dramatically as many people choose to engage in casual relationships instead of committing to lawful marriage.

The Prophet ﷺ described that near the end of times, people would engage in sexual acts openly, like animals, without any sense of shame or fear of Allah. In some societies today, public displays of such acts, as well as widespread acceptance of indecent behavior, reflect the accuracy of this prophetic warning.

Islam offers a complete system to protect individuals and societies from the harm of fornication. It emphasizes modesty (haya), lowering the gaze, avoiding situations of temptation, and maintaining the sanctity of marriage. The Shariah places severe punishments for fornication, not to oppress, but to deter such behavior and protect the well-being of the individual and society as a whole.

The widespread nature of zina is both a sign of moral decay and one of the minor signs leading to the Day of Judgment. Yet, believers are commanded to resist these trends, uphold chastity, encourage modesty, and protect their families. Those who guard their private parts, seek forgiveness for past sins, and strive to live by Allah's commands are promised immense reward in the Hereafter.

This prophecy serves as a reminder that as immorality spreads, believers must remain vigilant and committed to the teachings of Islam, regardless of how widespread or normalized sin becomes in society.`
},
  {
  id: 8,
  title: 'Alcohol Widespread',
  realized: true,
  date: 'Ongoing',
  article: `The widespread consumption of alcohol is another clear sign of the approach of the Day of Judgment, foretold by the Prophet Muhammad ﷺ. He said: "From among the signs of the Hour is that people will drink alcohol and call it by another name." (Ahmad). This prophecy has become a reality in modern times, where alcohol is not only widely consumed but is also marketed under many attractive labels and brands, diminishing its seriousness in the eyes of the masses.

Alcohol has been strictly prohibited in Islam because of its immense harm to individuals and societies. Allah says in the Qur'an: "O you who have believed, indeed, intoxicants, gambling, [sacrificing on] stone alters, and divining arrows are but defilement from the work of Satan, so avoid it that you may be successful." (Surah Al-Ma'idah: 90). Despite this clear command, alcohol is now socially acceptable in most parts of the world, and its consumption continues to rise, even in some Muslim-majority countries.

The alcohol industry is one of the largest and most profitable global businesses. Billions of dollars are spent annually on its production, advertisement, and consumption. Bars, nightclubs, and parties glorify its use, while advertisements falsely associate alcohol with happiness, success, and social status. This has led to an entire culture where drinking is seen as a normal and even essential part of social interaction.

The harm caused by alcohol is immense. It is responsible for countless car accidents, domestic violence cases, crimes, mental health disorders, liver diseases, and broken families. Alcohol addiction has destroyed many lives, leading to personal misery and societal chaos. Despite its severe consequences, many continue to consume it heedlessly.

In some places, alcohol is even consumed openly during weddings, corporate events, and festivals, often with little regard for Islamic teachings. Furthermore, many who drink attempt to justify their actions by labeling alcohol with different names such as "wine," "spirits," or "social beverages," exactly as the Prophet ﷺ foretold.

The believers are reminded to fear Allah and to stay far away from alcohol in any form. Abstaining from alcohol is not merely a personal act of piety but a protection for one's faith, health, family, and community. The Prophet ﷺ warned: "Whatever intoxicates in large amounts, a small amount of it is also forbidden." (Abu Dawood).

The prevalence of alcohol consumption in today’s world stands as a glaring fulfillment of this minor sign of the Hour. It serves as a reminder to the believers to hold firmly to the commandments of Allah, to safeguard their faith and their families, and to never be deceived by the temporary pleasures of this world.`
},
{
  id: 9,
  title: 'Widespread Killing',
  realized: true,
  date: '20th century',
  article: `The Prophet Muhammad ﷺ foretold that near the end of time, killing and bloodshed would become rampant and senseless. He said: "The Hour will not come until killing becomes widespread." (Bukhari, Muslim). In another narration, he described a time when "the killer will not know why he killed, and the one who was killed will not know why he was killed." (Muslim). These prophecies are vividly realized in the modern era.

The 20th and 21st centuries have witnessed unprecedented levels of violence. Two world wars resulted in the deaths of tens of millions of people, while countless other conflicts — civil wars, genocides, terrorist attacks, and mass shootings — continue to take innocent lives. The development of modern weapons, including nuclear arms, has made it possible for entire cities to be destroyed in moments, further amplifying the scale of killing.

Beyond organized wars, individual acts of murder have become widespread. In many cities, daily reports of shootings, stabbings, and homicides dominate the news. Gang violence, political assassinations, and mass killings have become tragically common, often for reasons that are petty, senseless, or unknown to the participants themselves.

Terrorism, driven by political, ideological, or sectarian motives, has added another layer of widespread killing that crosses national borders. Innocent civilians — including women, children, and the elderly — are often the victims of indiscriminate violence. Technology has also enabled remote warfare through drones and long-range missiles, further distancing the killers from their victims.

In addition to physical killing, modern societies have developed policies that indirectly contribute to mass death, such as systemic oppression, starvation, and the neglect of vulnerable populations. The Prophet ﷺ’s description of this era of widespread killing is one of the most evident signs visible before our very eyes.

The prevalence of killing also reflects the loss of compassion, justice, and respect for human life — values that Islam places at the core of its teachings. Allah says: "Whoever kills a soul unless for a soul or for corruption done in the land — it is as if he had slain mankind entirely." (Surah Al-Ma’idah: 32).

The believers are commanded to uphold justice, value life, and strive for peace and reconciliation. The widespread killing we witness today serves as a stark reminder of the truthfulness of the Prophet ﷺ’s words and the nearness of the Hour. It calls the believers to repent, to adhere to the Qur'an and Sunnah, and to prepare themselves for the ultimate accountability before Allah.`
},
{
  id: 10,
  title: 'Wealth Abundant',
  realized: true,
  date: '21st century',
  article: `One of the minor signs of the Hour that the Prophet Muhammad ﷺ foretold is the abundance of wealth in the world. In multiple hadith, he mentioned that near the end of times, wealth would become so abundant that people would no longer find anyone willing to accept charity. In one narration, the Prophet ﷺ said: "Wealth will be in abundance, so abundant that one will be worried lest no one may accept his charity." (Bukhari, Muslim).

In today's world, we witness unprecedented levels of wealth and luxury, especially in certain regions. Globalization, technological advancement, industrial growth, and financial markets have created immense wealth for nations, corporations, and individuals. The rise of billionaires, luxury lifestyles, and consumer culture reflect the abundance the Prophet ﷺ described.

In particular, the 21st century has seen countries in the Arabian Peninsula amass incredible wealth through oil, gas, and global investments. Cities like Dubai, Doha, and Riyadh have become symbols of luxury, wealth, and modernity, boasting some of the tallest skyscrapers, lavish hotels, and extravagant lifestyles. What once were simple desert communities have now transformed into global hubs of commerce and tourism.

However, this abundance of wealth has also exposed stark inequalities. While some regions experience immense prosperity, others continue to struggle with poverty, hunger, and lack of basic necessities. The Prophet ﷺ’s statement indicates that towards the very end, wealth will be so widespread even the poor will become fewer.

The abundance of wealth has also led many to forget their obligations toward Allah, their families, and the poor. Consumerism, materialism, and the pursuit of luxury often distract people from the remembrance of Allah, causing many to chase worldly pleasures at the expense of their spiritual well-being.

Islam teaches that wealth is a trust (amanah) from Allah and that believers are accountable for how they earn, spend, and share it. Zakat (obligatory charity) and voluntary sadaqah (charity) are means to purify one’s wealth and help those in need. The abundance of wealth should motivate Muslims to give generously, support the poor, and invest in good deeds for the Hereafter.

At the same time, this sign serves as a reminder that abundance is a test. Allah tests people through poverty and through wealth. Those who are blessed with wealth must be grateful, humble, and mindful of their responsibilities, knowing that the real success lies not in worldly riches but in earning the pleasure of Allah and securing their place in the Hereafter.

As wealth continues to increase in the world, this prophecy stands fulfilled before our eyes, further confirming the truthfulness of the Prophet ﷺ and bringing us closer to the final hour.`
},
{
  id: 11,
  title: 'Tall Buildings Competition',
  realized: true,
  date: '21st century',
  article: `One of the most famous minor signs of the Day of Judgment mentioned by the Prophet Muhammad ﷺ is the competition to build tall buildings. In the hadith of Jibreel (Gabriel), when the angel asked the Prophet ﷺ about the signs of the Hour, he replied: "…when you see the barefoot, naked, destitute shepherds competing in constructing tall buildings." (Bukhari, Muslim).

This prophecy has manifested clearly in recent decades, especially in the Arabian Peninsula, where Bedouin tribes, once known for their simple desert lifestyles, have become some of the wealthiest people on earth due to oil discoveries. With this wealth, many of these nations began constructing some of the world’s tallest and most extravagant skyscrapers.

Cities like Dubai, Abu Dhabi, Doha, and Riyadh now boast futuristic skylines, with architectural marvels that pierce the clouds. The Burj Khalifa in Dubai, currently the tallest building in the world, stands as a symbol of this competition. Plans continue for even taller towers to surpass it, demonstrating the literal fulfillment of this hadith.

This competition for the tallest and most magnificent buildings is not limited to the Arabian Peninsula. Countries around the world, including China, the United States, and Malaysia, have engaged in constructing towering structures, often as symbols of national pride, economic power, and technological advancement.

While such architecture demonstrates human innovation and capability, it also reflects excessive pride, extravagance, and a focus on worldly glory — all of which the Prophet ﷺ warned would become widespread near the end of times. Rather than investing in moral development, many societies pour vast resources into competing for superficial displays of wealth and progress.

The hadith not only foretells the competition but subtly critiques the shift in priorities. The same shepherds once focused on survival now compete in vanity projects while often neglecting spiritual, social, and moral responsibilities.

For believers, this sign serves as both evidence of the Prophet's ﷺ truthfulness and a reminder not to be distracted by the temporary glitters of the world. Islam encourages moderation, humility, and using wealth for beneficial purposes rather than extravagant displays that serve no real purpose in benefiting humanity or earning reward in the Hereafter.

As this prophecy continues to unfold with new record-breaking structures planned every few years, it is yet another sign that the Hour draws ever closer, and that the believers should remain aware, grounded, and focused on their ultimate meeting with Allah.`
},
{
  id: 12,
  title: 'Children Disobey Parents',
  realized: true,
  date: 'Ongoing',
  article: `Among the signs of the approach of the Last Day, the Prophet Muhammad ﷺ mentioned that children would disobey their parents and treat them harshly. In one narration, he said: "When a man obeys his wife and disobeys his mother, and draws his friend near and distances his father, then the Hour is near." (Tirmidhi).

The breakdown of family structure and the weakening of parental authority is a hallmark of modern times. In many cultures, the respect, honor, and obedience that children once gave to their parents has eroded significantly. Children are increasingly influenced by external forces such as peers, media, and individualism, which promote personal freedom over familial responsibility.

Modern educational philosophies and societal norms often prioritize self-expression, independence, and personal rights to the extent that parental guidance is seen as oppressive or outdated. In many cases, parents struggle to maintain discipline or instill values in their children as external influences dominate their upbringing.

The rise of technology, particularly social media, has further distanced children from their parents. Many young people now turn to online platforms for advice, companionship, and validation rather than seeking guidance from their parents. This technological disconnect weakens family bonds and diminishes the role of parental wisdom and experience.

Furthermore, legal systems in some countries have stripped parents of many of their rights to discipline or guide their children, leading to situations where children challenge or even legally act against their parents' authority. This shift in family dynamics was unimaginable in earlier generations and reflects the prophetic warning.

Islam places great emphasis on honoring and obeying one's parents. Allah commands in the Qur'an: "And We have enjoined upon man [care] for his parents: His mother carried him, [increasing her] in weakness upon weakness, and his weaning is in two years. Be grateful to Me and to your parents; to Me is the [final] destination." (Luqman: 14).

The disobedience of children to their parents is not merely a social issue but a spiritual one. It reflects a loss of gratitude, respect, and humility that Allah has enjoined upon the believers. Disobedient children face severe consequences in both this life and the Hereafter unless they repent and rectify their behavior.

The widespread disobedience of children to their parents is a clear fulfillment of this sign and serves as a wake-up call for believers to revive Islamic family values. Parents must strive to nurture their children with love, wisdom, and firm guidance, while children must recognize the immense right their parents have over them.

As this sign becomes increasingly visible in our time, it is yet another indication of the truthfulness of the Prophet ﷺ’s prophecies and the nearness of the Hour.`
},
{
  id: 13,
  title: 'Musical Instruments Spread',
  realized: true,
  date: 'Ongoing',
  article: `One of the clear minor signs of the approach of the Last Day mentioned by Prophet Muhammad ﷺ is the widespread use and acceptance of musical instruments. In an authentic narration, he ﷺ stated: "There will be among my Ummah people who will regard as permissible: adultery, silk (for men), alcohol, and musical instruments." (Bukhari, Mu’allaq form, authenticated by scholars).

During the time of the Prophet ﷺ and early generations, musical instruments were rare and generally avoided by devout Muslims due to their potential to distract hearts from the remembrance of Allah and promote sinful behavior. The early scholars of Islam extensively warned against the dangers of music, considering it one of the traps of Shaytaan (Satan) that incites desires, negligence in worship, and heedlessness toward the Hereafter.

In today’s world, we witness the massive spread of music on a global scale. It is not only present, but heavily promoted in nearly every aspect of life — entertainment, advertising, social media, and even public places. The music industry has become a multi-billion-dollar business, with concerts, streaming platforms, award shows, and global fan bases that idolize musicians.

Many of the themes present in modern music — including immorality, disobedience to parents, glorification of wealth, violence, indecency, and open rebellion against religious teachings — serve to corrupt hearts and encourage people to indulge in sins. The Prophet’s ﷺ warning about this phenomenon was precise, indicating not only the spread of music but people openly declaring it permissible despite clear prohibitions.

Technological advancements have amplified the reach of music. Today, people have instant access to music at all times through smartphones, wireless earbuds, and 24-hour entertainment platforms. Exposure begins at a young age, and for many, music becomes an inseparable part of daily life, often replacing the remembrance of Allah (dhikr), Qur'an recitation, and beneficial knowledge.

While some scholars permit certain forms of light singing under strict conditions, the dominant form of music that floods society today contains many elements forbidden in Islam, including inappropriate lyrics, sexual content, promotion of drugs and alcohol, and encouragement of disobedience.

The spread of musical instruments and their normalization across the world is one of the clear and undeniable signs of the nearness of the Hour. For the believer, this serves as a warning to remain cautious and protect their hearts from that which may distract them from the purpose of life: worshipping Allah and preparing for the Hereafter.

In these times, Muslims are advised to seek halal alternatives, limit exposure to harmful media, engage in constant remembrance of Allah, and ensure that their hearts are attached to Qur'an and beneficial knowledge rather than to the fleeting distractions of this world.`
},
{
  id: 14,
  title: 'Arabian Peninsula Green Again',
  realized: false,
  date: null,
  article: `Among the remarkable minor signs that the Prophet Muhammad ﷺ foretold is that before the Hour, the Arabian Peninsula — once a barren desert — would return to being green with rivers flowing through it. In an authentic hadith, the Prophet ﷺ said: "The Hour will not come until the land of Arabia returns to being meadows and rivers." (Sahih Muslim).

Historically, geological evidence supports that parts of the Arabian Peninsula were once fertile, with rivers, lakes, and lush vegetation thousands of years ago. Over time, climatic shifts transformed the region into the arid desert it is known for today. However, recent developments hint at the beginning of this incredible prophecy's fulfillment.

In recent years, Saudi Arabia and other parts of the Arabian Peninsula have experienced unusual weather patterns, including unexpected rainfall, flooding, and greenery emerging in places that have been dry for centuries. Satellite images have captured rivers forming temporarily in desert valleys (wadis) and green vegetation covering sand dunes in certain seasons.

Climate change models predict that shifts in global weather systems may bring increased precipitation to parts of the Arabian Peninsula in the future. Furthermore, many ambitious government projects aim to convert desert lands into arable farmland using advanced irrigation, desalination, and sustainability technology, effectively bringing greenery back to the desert.

Mega projects such as Saudi Arabia's "Green Riyadh" and the Middle East Green Initiative seek to plant billions of trees and rehabilitate desert lands, partially fulfilling this hadith. However, it is important to recognize that the full manifestation of this prophecy likely refers to a natural transformation, rather than solely human intervention.

The return of the Arabian Peninsula to greenery is not merely a positive ecological event, but a significant sign of the nearness of the Day of Judgment as directly foretold by the Prophet ﷺ. This sign demonstrates the precise truthfulness of his prophecies, which continue to unfold centuries after his death.

For believers, witnessing the beginnings of this sign should strengthen faith and increase awareness of the approaching Hour. It reminds us that while humanity marvels at technological advancement, Allah’s decree over nature and time remains supreme. As this sign progresses, it serves as a vivid reminder of Allah’s power and the truth of the Final Day drawing closer.`
},
{
  id: 15,
  title: 'Trade and Business Widespread',
  realized: true,
  date: 'Ongoing',
  article: `One of the minor signs that the Prophet Muhammad ﷺ mentioned regarding the approach of the Last Hour is the widespread growth of trade and business. In a narration, he said: "Trade will become so widespread that a woman will assist her husband in trade." (Musnad Ahmad, authenticated by scholars).

Trade and commerce have existed since ancient times, but never in human history has trade become as globalized, instant, and interconnected as it is today. The rise of globalization, the internet, e-commerce, international supply chains, and global financial markets has transformed trade into a phenomenon that touches nearly every individual on the planet.

Today, even small businesses and individuals can participate in global trade from their homes, buying and selling goods across borders through online platforms like Amazon, Alibaba, and eBay. Massive shipping networks, air freight, and logistics companies have made the world a global marketplace where products travel thousands of miles to reach consumers within days.

What is even more remarkable is the Prophet’s ﷺ mention that women would participate extensively in business. In modern times, women’s participation in the workforce, including in trade and entrepreneurship, has increased tremendously. Many women now run successful businesses, manage investments, and play significant roles in international commerce, directly reflecting this prophecy.

While trade and business provide numerous opportunities for prosperity and economic growth, they also pose spiritual challenges. The temptation of greed, dishonesty, and unethical business practices have become widespread. Many violate Islamic principles by engaging in interest (riba), fraud, exploitation, and the neglect of zakat and charitable obligations.

Islam emphasizes fairness, honesty, and accountability in trade. The Prophet ﷺ said: "The truthful and trustworthy merchant will be with the Prophets, the truthful, and the martyrs on the Day of Resurrection." (Tirmidhi). Thus, even amidst this explosion of trade, Muslims are commanded to adhere strictly to Islamic business ethics.

The widespread nature of trade is a fulfillment of the Prophet’s ﷺ words and a reminder that every prophecy he conveyed is unfolding precisely as foretold. As believers witness these signs, they are called to strengthen their connection with Allah, purify their income, and prepare for the final hour, which continues to draw nearer.`
},
{
  id: 16,
  title: 'Many Earthquakes',
  realized: true,
  date: 'Ongoing',
  article: `One of the minor signs of the approach of the Last Day mentioned by the Prophet Muhammad ﷺ is the increase in the number of earthquakes. In a narration reported by Abu Hurairah (RA), the Prophet ﷺ said: "The Hour will not be established until... earthquakes increase in number." (Bukhari).

Earthquakes have always occurred throughout history, but scientific data shows a notable increase in the number, frequency, and magnitude of earthquakes in many regions over the past century. Whether due to natural seismic activity, shifting tectonic plates, or even man-made factors such as drilling and fracking, the rise in earthquakes aligns exactly with this sign foretold over 1400 years ago.

In recent decades, major earthquakes have struck countries all over the world — devastating cities, displacing millions, and causing tremendous loss of life and property. Regions like the Pacific "Ring of Fire," Turkey, Iran, Indonesia, and even North America have witnessed powerful earthquakes with increasing frequency.

Seismologists continue to monitor global seismic activity, and many agree that there are fluctuations and periods where earthquakes cluster with unusual intensity. The Prophet ﷺ’s words did not necessarily refer only to the increase in magnitude but to the general increase in occurrence and awareness.

Beyond the physical destruction, earthquakes serve as powerful reminders of Allah’s control over the Earth. In seconds, entire cities can crumble, and human achievements can vanish. They are signs that should lead people to reflect upon their mortality, the temporary nature of this world, and their preparation for the Hereafter.

Islam teaches that natural disasters are both tests and signs from Allah. For believers, these events should encourage repentance, remembrance of Allah, and increased obedience. For humanity at large, they are reminders of human vulnerability and the need to humble oneself before the Creator.

As the world witnesses more frequent and severe earthquakes, this sign of the Last Hour continues to unfold exactly as the Prophet ﷺ foretold, increasing the certainty of believers in the truth of his prophethood and the reality of the approaching Day of Judgment.`
},
{
  id: 17,
  title: 'Euphrates Reveals Gold',
  realized: false,
  date: null,
  article: `Among the extraordinary minor signs of the Last Day that Prophet Muhammad ﷺ mentioned is the uncovering of a mountain of gold beneath the Euphrates River. The Prophet ﷺ said: "The Hour will not come until the Euphrates uncovers a mountain of gold over which people will fight. Ninety-nine out of every hundred will be killed, and each of them will say: 'Perhaps I may be the one to remain alive.'" (Bukhari, Muslim).

The Euphrates River flows through Turkey, Syria, and Iraq — regions rich in historical, political, and spiritual significance in Islam. Despite being one of the world’s oldest rivers, the prophecy indicates that a time will come when either due to natural causes, human activity, or divine decree, this treasure will be exposed.

Modern speculation has linked this prophecy to recent reports of declining water levels in the Euphrates due to climate change, upstream dam projects, and overuse. Some have wondered whether droughts or artificial redirection of the river’s course might one day reveal hidden resources beneath it.

The mention of a "mountain of gold" may refer to actual gold or symbolize immense wealth such as oil, minerals, or other precious resources. Some scholars suggest it could be literal, while others believe it might allude to large energy reserves like oil, which has been called the "black gold" of modern times — found abundantly in the Middle East.

Regardless of interpretation, the Prophet’s warning is clear: people will be so overwhelmed by greed that massive fighting will ensue, resulting in devastating loss of life. This illustrates not only the peril of unchecked greed but also how the nearness of the Hour will bring unprecedented trials upon humanity.

For the believer, this prophecy emphasizes the dangers of excessive worldly attachment. As the world chases wealth, the Muslim is reminded to seek contentment, avoid greed, and prepare for the Hereafter, where true wealth lies in righteousness and good deeds.

This sign has not yet fully manifested, but the conditions for its occurrence seem to be drawing closer as the Euphrates continues to shrink. When it does happen, it will be yet another clear validation of the prophecies of Prophet Muhammad ﷺ and a dire warning for humanity to reflect and repent.`
},
{
  id: 18,
  title: 'Widespread Usury (Riba)',
  realized: true,
  date: 'Ongoing',
  article: `Prophet Muhammad ﷺ warned that one of the signs of the nearness of the Day of Judgment is the widespread prevalence of usury (riba). He ﷺ said: "A time will come upon the people when none will remain who does not consume riba, and if he does not consume it, its dust will reach him." (Ahmad, Abu Dawood).

Riba, or interest-based transactions, are strictly forbidden in Islam due to the profound injustice, exploitation, and inequality they foster in society. Yet in our era, riba has become the foundation of the global financial system. Central banks, commercial banks, credit systems, mortgages, personal loans, student debts, and even international aid often revolve around interest-based contracts.

From the individual to the state level, nations are drowning in debt, creating perpetual systems of financial enslavement. The rich grow richer while the poor remain trapped in cycles of poverty — a reality that directly contradicts Islamic principles of financial justice, charity, and equitable wealth distribution.

In modern times, it is nearly impossible to avoid indirect exposure to riba even when one strives to follow Islamic guidelines. Whether through banking, pensions, business investments, or insurance, some form of interest often exists. This reflects the Prophet’s ﷺ exact warning that even those who avoid it will still be affected by its "dust."

Islamic finance has grown significantly to offer halal alternatives, but even this sector faces challenges as it operates within a global riba-dominated system. Muslims must exercise great caution, educate themselves about halal and haram financial dealings, and strive to support ethical financial models rooted in Shariah principles.

The widespread prevalence of riba is not only an economic issue but a spiritual calamity. Allah has declared war against those who engage in usury (Qur'an 2:279), indicating the severity of the sin. For believers, the modern reality of riba is a wake-up call to return to pure financial ethics and increase taqwa (God-consciousness).

This prophetic sign serves as a powerful reminder that the world is increasingly moving toward the conditions described for the end times, and that Muslims must hold firmly to their faith amidst widespread moral and financial corruption.`
},
{
  id: 19,
  title: 'Writing & Literacy Widespread',
  realized: true,
  date: 'Modern era',
  article: `Among the minor signs of the Last Day mentioned by Prophet Muhammad ﷺ is the widespread prevalence of writing and literacy. In a narration, he ﷺ said: "The Hour will not come until knowledge becomes widespread and writing becomes widespread." (Musnad Ahmad).

In ancient times, literacy was a privilege of the elite. The majority of the population, even in advanced societies, remained illiterate. During the lifetime of the Prophet ﷺ, literacy was rare in Arabia, and most people depended on oral transmission of information. Only a few companions could read and write.

Today, however, literacy has become nearly universal in many parts of the world. Schools, universities, and online platforms have spread education to unprecedented levels. Access to books, articles, research, and knowledge has expanded to billions of people across the globe. The invention of the printing press, the internet, smartphones, and AI have made information instantly accessible.

While literacy has enabled great scientific, technological, and educational advancement, it also has its negative side. The Prophet ﷺ linked the spread of writing with the coming of the Last Hour — indicating that knowledge would be widespread but true beneficial knowledge would be rare. Indeed, while people possess vast amounts of information, spiritual ignorance remains widespread.

People consume enormous amounts of content daily — much of it trivial, false, or distracting from true beneficial knowledge. Social media, entertainment, misinformation, and endless debates fill people’s minds, often leading to confusion rather than guidance. The Qur'an and Sunnah remain neglected by many, despite widespread literacy.

The prophecy about the spread of writing is remarkably accurate, capturing both the massive rise of literacy and the shallowness of much modern knowledge. It also reflects the paradox of our times: an information age that has not necessarily produced better human character or spiritual growth.

For believers, this sign reminds us to seek not just literacy, but *beneficial knowledge* (ilm naafi’), which brings us closer to Allah, increases our understanding of the Deen, and prepares us for the Hereafter. Literacy is a tool; whether it becomes a blessing or a curse depends on how it is used.

The widespread nature of literacy today fulfills exactly what the Prophet ﷺ foretold, providing yet another powerful sign for believers to reflect upon and strengthen their iman (faith).`
},
{
  id: 20,
  title: 'Disappearance of Honest Scholars',
  realized: true,
  date: 'Ongoing',
  article: `Among the deeply concerning minor signs of the Last Day mentioned by Prophet Muhammad ﷺ is the gradual disappearance of righteous and honest scholars. In an authentic narration, he ﷺ said: "Allah does not take away knowledge by snatching it away from the hearts of the people, but He takes it away by the death of the scholars. Until when no scholar remains, people will take ignorant leaders; they will be asked and they will issue verdicts without knowledge. They will go astray and will lead others astray." (Bukhari, Muslim).

Throughout Islamic history, scholars have played a critical role in preserving the Deen, teaching the Qur’an and Sunnah, guiding communities, and standing as beacons of truth. They were not merely academics but embodied piety, wisdom, and sincerity. The Ummah’s strength was always tied to the presence of its righteous scholars.

In our times, we are witnessing an increasing loss of these noble scholars. Many renowned scholars, who had profound knowledge and strong adherence to the Sunnah, have passed away. With their departure, a spiritual void is left behind that is often filled by individuals lacking sound knowledge, piety, or proper training.

The rise of social media "scholars," self-proclaimed experts, and those who issue fatwas without proper qualifications has become widespread. Many people follow personalities rather than true scholarship, leading to confusion, divisions, and the spread of incorrect teachings.

Furthermore, some governments and institutions silence or control religious scholars, limiting their ability to speak the truth. In other cases, some scholars become influenced by worldly interests, losing their objectivity and sincerity.

This dangerous void has led to the proliferation of deviant ideologies, innovations (bid’ah), extremist views, and widespread religious ignorance among Muslims. Without proper guidance, many are vulnerable to misinterpretations and misleading teachings.

The disappearance of honest scholars is a grave sign that the Ummah is approaching one of the dangerous stages of the end times. As Prophet Muhammad ﷺ warned, ignorance will increase while true knowledge becomes rare.

For the believer, this sign is a call to urgently seek authentic knowledge, preserve the correct teachings of Islam, and support sincere scholars who uphold the Qur’an and Sunnah with integrity. It also serves as a powerful reminder of the trust we have to safeguard the Deen for future generations before true knowledge vanishes completely.`
},
{
  id: 21,
  title: 'False Testimony Widespread',
  realized: true,
  date: 'Ongoing',
  article: `Prophet Muhammad ﷺ warned that one of the signs of the approach of the Last Day would be the widespread occurrence of false testimony. In an authentic narration, he ﷺ said: "Shall I not inform you of the greatest of major sins?" He repeated it three times, and then said: "To join others in worship with Allah, to disobey parents, and to give false witness or false statement." (Bukhari, Muslim).

False testimony—lying under oath or giving dishonest accounts—undermines justice at its very core. In Islamic law (Shariah), justice is foundational for a functioning society. False witness not only leads to wrongful convictions, but destroys trust between people, corrupts courts, and enables oppression and tyranny.

In modern times, this prophecy has sadly become widely evident. False testimonies are rampant in courtrooms, business transactions, personal disputes, and even political arenas. In many countries, bribery and corruption influence court rulings, while dishonest witnesses are bought to sway verdicts. Innocent people are often jailed while the guilty walk free.

The spread of false testimony is not limited to formal settings. With the rise of social media, people now spread false accusations, rumors, and slander with ease. A simple post or video can damage reputations, livelihoods, and families—often without evidence or accountability.

The Prophet ﷺ warned that one of the most destructive characteristics of the end times is the loss of truthfulness and integrity. As lying and false testimony increase, societies begin to crumble from within, losing trust in their leaders, institutions, and even family relationships.

For believers, this sign serves as a severe warning to uphold honesty in every situation. Allah commands in the Qur'an: "And do not conceal testimony, for whoever conceals it—his heart is indeed sinful." (Surah Al-Baqarah 2:283). Speaking the truth, even when difficult, is a mark of strong faith and a requirement of true piety.

The widespread acceptance of false testimony in modern times fulfills the Prophet’s ﷺ warning and serves as another powerful reminder of how closely humanity is approaching the end times.`
},
{
  id: 22,
  title: 'Women Outnumber Men',
  realized: true,
  date: 'Modern era',
  article: `The Prophet Muhammad ﷺ foretold that a time would come when the number of women would vastly exceed the number of men. In an authentic narration, he ﷺ said: "And among the signs of the Hour is that there will be a great number of women and very few men, so that fifty women will be looked after by one man." (Bukhari, Muslim).

Today, this sign is increasingly observable in many parts of the world. Various factors have contributed to the imbalance between the genders. Wars, violence, and conflict disproportionately result in the death of men. Global conflicts in the 20th and 21st centuries, such as World Wars, regional wars, and civil wars, have led to millions of male casualties.

Additionally, certain health conditions, substance abuse, dangerous professions, and risky behaviors contribute to higher mortality rates among men. In many countries, life expectancy for women is significantly higher than for men, further widening the gender gap.

Social and cultural changes have also influenced family structures, marriage rates, and gender roles. Many women remain unmarried, divorced, or widowed for long periods, contributing to a growing population of single women. The rise of feminism, economic independence, and shifting societal norms have further altered the traditional balance of family life.

Some scholars interpret the Prophet's statement about "fifty women under the care of one man" not necessarily as a call for polygamy, but as a description of the extraordinary circumstances of gender imbalance that will characterize the end times.

The spiritual dimension of this sign is equally significant. The changing structure of families, rising individualism, and moral challenges linked to gender relations signal the weakening of traditional values. The widespread prevalence of zina (fornication), delayed marriages, and breakdowns in family responsibility are some of the direct consequences.

For believers, this sign serves both as an acknowledgment of the unfolding of divine prophecy and as a reminder to uphold Islamic family values, protect the institution of marriage, and foster mutual respect and responsibility between men and women according to the guidance of the Qur'an and Sunnah.`
},
{
  id: 23,
  title: 'Nations Gather Against Muslims',
  realized: true,
  date: 'Modern wars',
  article: `Among the deeply sobering signs that Prophet Muhammad ﷺ foretold is that the nations of the world would unite against the Muslim Ummah. He ﷺ said: "The nations will soon summon one another to attack you as people invite others to share their meal." His companions asked: "Will that be because of our small number at that time?" He said: "No, you will be numerous, but you will be like the foam of the sea." (Abu Dawood).

This prophecy is visibly unfolding today. Despite the large population of Muslims globally, the Ummah faces unprecedented challenges from external forces. Political coalitions, military interventions, economic sanctions, and media campaigns frequently target Muslim-majority countries. The wars in Palestine, Iraq, Syria, Afghanistan, and beyond have shown the global coalition's power in exerting pressure and dominance over Muslim nations.

Muslim lands have been invaded, occupied, or destabilized, resulting in the deaths of millions, displacement of refugees, and widespread destruction. International organizations often fail to intervene effectively, and the interests of powerful nations dominate decision-making bodies such as the United Nations.

Furthermore, the ideological war against Islam intensifies through negative portrayals of Muslims in media, laws targeting Islamic practices, and rising Islamophobia in both Western and non-Western countries. Muslims are often collectively blamed for the actions of a few, fueling discrimination and hostility.

The phrase "like the foam of the sea" accurately describes the political weakness and fragmentation of the Ummah. Despite great numbers, Muslims lack unity, strong leadership, and coordinated action. Nationalism, sectarianism, and internal conflicts further weaken the collective strength of the Muslim world.

For believers, this sign is not meant to cause despair but to serve as a reminder of the importance of unity, faith, and returning to the Qur’an and Sunnah. The Prophet ﷺ emphasized that the Ummah’s strength lies not in numbers but in adherence to Islam, trust in Allah, and collective solidarity.

This prophecy, witnessed so clearly in our times, serves as another undeniable fulfillment of the truthfulness of the Messenger ﷺ and the nearness of the end times.`
},
{
  id: 24,
  title: 'Muslim Ummah Weak Despite Large Number',
  realized: true,
  date: 'Modern era',
  article: `Prophet Muhammad ﷺ described a time when the Muslim Ummah would be vast in numbers yet weak in influence and power. He ﷺ said: "The people will soon summon one another against you as people invite one another to share their meal." The companions asked: "Will we be few in number at that time?" The Prophet replied: "No, you will be numerous, but you will be like the foam on the sea." (Abu Dawood).

This reality is manifest in today’s world. With over 1.9 billion Muslims globally, Islam is one of the fastest-growing religions. However, this growth in numbers has not translated into political strength, economic independence, or unity of purpose. Muslim-majority countries are often divided, economically dependent, and politically fragmented.

Sectarian divisions, tribal loyalties, and national interests have created serious obstacles to unity. Disputes between Muslim states, conflicts within countries, and interference by external powers have weakened the Ummah’s collective capacity to stand for justice, defend oppressed Muslims, or influence global affairs.

The Prophet’s description of the Ummah resembling "foam on the sea" reflects not only political weakness but also a spiritual and moral decline. Attachment to worldly desires, disobedience to Allah’s commands, and abandonment of Islamic principles have stripped many Muslims of the strength that comes from sincere faith and unity.

Despite abundant wealth in certain regions, much of the Muslim world suffers from poverty, injustice, corruption, and oppression. While individual acts of charity and faith are widespread, the collective power of the Ummah remains disjointed.

This prophecy is both a warning and a call for reflection. The solution lies not in merely increasing numbers but in reviving the spiritual, moral, and intellectual legacy of Islam. The Prophet ﷺ emphasized that true strength comes from adherence to the Qur’an and Sunnah, mutual support, and collective repentance.

The current weakness of the Ummah is another fulfillment of the Prophet's ﷺ truthful warnings about the signs of the Last Day. It serves as a motivation for every Muslim to contribute toward the revival of the Ummah's strength, beginning with personal reform, knowledge, and sincere devotion to Allah.`
},
{
  id: 25,
  title: 'Increase in Wealth but Moral Decay',
  realized: true,
  date: 'Modern era',
  article: `Prophet Muhammad ﷺ foretold that in the end times, people would become very wealthy but at the same time lose their moral values and righteousness. He ﷺ said: "There will come a time when a man will not care how he gains his money, legally or illegally." (Bukhari, Muslim).

In today’s world, the accumulation of wealth has reached unprecedented levels. Many societies have experienced significant economic growth, technological advancements, and material prosperity. However, alongside this rise in wealth, there is a notable decline in ethical behavior and social responsibility.

Greed, corruption, and dishonesty have become widespread in many sectors including business, politics, and even personal dealings. The pursuit of wealth has often led to exploitation, injustice, and neglect of spiritual and moral duties. People prioritize material gain over compassion, honesty, and fairness.

The Prophet ﷺ’s warning highlights the disconnect between material success and spiritual health. Wealth itself is not condemned in Islam, but the way it is acquired and used matters greatly. When wealth is gained through unlawful or unethical means, it becomes a source of harm rather than blessing.

This sign serves as a caution to believers to remain mindful of their intentions, seek halal (permissible) earnings, and use their wealth for good causes. It also calls for a revival of moral education, community accountability, and adherence to Islamic economic principles.

The increase in wealth accompanied by moral decay is a clear fulfillment of prophetic warning, signaling the nearness of the Hour and the need for personal and societal reform.`
},
  {
    id: 26,
    title: 'Abandonment of prayer',
    realized: true,
    date: 'Ongoing',
    article: `Prayer (Salah) is the fundamental act of worship in Islam, forming one of its Five Pillars. It is a direct link between the believer and Allah, performed five times daily. Beyond its ritualistic nature, prayer nurtures spirituality, discipline, and community cohesion. The abandonment of prayer is one of the earliest and most profound signs foretold to precede the Day of Judgment.

Historically, Muslim societies have deeply ingrained prayer into daily life, shaping routines and guiding ethical conduct. Yet, modern times have seen a decline in this commitment due to secular influences, distractions from technology, and weakening religious education. As prayer diminishes, individuals risk losing spiritual grounding, leading to moral decay, increased selfishness, and loss of purpose.

The Prophet Muhammad ﷺ warned that neglecting prayer is akin to severing one’s bond with Allah, leading to spiritual ruin. Prayer also fosters unity through congregational worship, strengthening social ties. Its decline signals weakening faith and societal fragmentation.

Reviving prayer requires community effort: enhancing religious teachings, facilitating prayer in busy lives, and nurturing supportive faith communities. Embracing prayer restores balance, renews purpose, and reestablishes connection with the Divine amidst modern distractions. This sign remains a crucial call for spiritual awakening and reform.`
  },
  {
    id: 27,
    title: 'Sudden death widespread',
    realized: true,
    date: 'Modern era',
    article: `Sudden and unexpected death has become increasingly common in the modern era, representing another sign of the approaching end times. The Quran and Hadith describe the prevalence of sudden death, such as from heart attacks, strokes, and accidents, as indications of societal decline and spiritual neglect.

Historically, sudden death was less frequent, with many living longer and dying after prolonged illness. Today, rapid lifestyle changes, increased stress, poor diet, environmental toxins, and widespread diseases contribute to higher mortality rates from sudden causes. The rise of urbanization and technological dependence also plays a role in the unexpected nature of death.

From a religious perspective, sudden death serves as a reminder of human mortality and the fragile nature of life. It calls people to prepare for the Hereafter by strengthening faith and good deeds. The prevalence of sudden death reveals a society less conscious of spiritual readiness and more consumed by worldly distractions.

The increase in sudden death points to the urgency of reflecting on one’s life, fostering health awareness, and returning to ethical and spiritual values. It underscores the fragile balance between life and death, urging believers to prioritize their faith and actions in preparation for the inevitable meeting with their Creator.`
  },
  {
    id: 28,
    title: 'Homosexuality widespread',
    realized: true,
    date: '21st century',
    article: `The widespread legalization and social acceptance of homosexuality in the 21st century is seen in Islamic eschatology as a sign of moral decline preceding the Last Day. Islamic teachings hold clear views on sexual ethics, considering homosexuality prohibited based on scriptural injunctions.

In recent decades, many countries have decriminalized and openly embraced LGBTQ+ rights, promoting equality and inclusion. While these developments reflect human rights progress in some societies, traditional Islamic views regard this as part of the signs indicating the erosion of religious values.

The Quran recounts the story of the people of Lot (Lut), who were punished for engaging in homosexual acts. This narrative serves as a caution against the normalization of behavior considered sinful in Islam. The increasing public promotion of homosexuality is viewed by many scholars as part of a broader societal move away from divine guidance.

This sign highlights the tension between modern social trends and traditional religious morals. It calls Muslims to reaffirm their faith while engaging with the world compassionately and wisely. Understanding this sign involves balancing respect for individuals with adherence to scriptural principles, emphasizing the need for spiritual reflection and moral clarity as the world approaches the end times.`
  },
  {
    id: 29,
    title: 'Appearance of Imam Mahdi',
    realized: false,
    date: null,
    article: `The appearance of Imam Mahdi is one of the central major signs in Islamic eschatology, marking a pivotal turning point before the Day of Judgment. The Mahdi, meaning “the rightly guided one,” is prophesied to emerge as a just leader who will restore faith, justice, and peace in a world overwhelmed by corruption and strife.

Descriptions of the Mahdi portray him as a descendant of the Prophet Muhammad ﷺ, possessing profound knowledge and spiritual wisdom. His arrival will coincide with widespread chaos and oppression, and he will unite Muslims under righteous leadership.

The Mahdi’s mission is to revive true Islam, establish equity, and prepare the world for the final events leading to the end times. His rule will bring unprecedented justice and prosperity, correcting moral and social decay.

Though the exact timing of the Mahdi’s appearance remains unknown, believers are urged to prepare spiritually by strengthening their faith and ethical conduct. The Mahdi embodies hope for renewal and divine justice, symbolizing the ultimate triumph of truth in the face of adversity. His advent is eagerly awaited as a sign that the end times are near, demanding vigilance and readiness from the faithful.`
  },
  {
    id: 30,
    title: 'Appearance of Sufyani (Syria)',
    realized: false,
    date: null,
    article: `The emergence of Sufyani, a tyrannical figure from Syria (Sham), is another major sign in Islamic eschatology, often depicted as a harbinger of widespread turmoil and oppression preceding the Last Day. The Sufyani will rise amid political chaos, deceiving many and spreading injustice.

Narrations describe him as a ruthless leader who will persecute the righteous and create havoc in the region. His reign will be marked by cruelty, betrayal, and severe trials for believers.

The rise of Sufyani reflects the fulfillment of prophecies about the trials faced by the Muslim Ummah in the end times. It underscores the themes of fitnah (trial) and moral decline before ultimate divine intervention.

Muslims are cautioned to remain steadfast in faith during this period of tribulation. The figure of Sufyani serves as a reminder of the tests awaiting humanity and the importance of spiritual resilience. While his appearance is awaited, believers focus on preparing their hearts and communities to withstand these challenges with patience and trust in Allah’s plan.`
  },
  {
    id: 31,
    title: 'Appearance of Dajjal (Antichrist)',
    realized: false,
    date: null,
    article: `The appearance of Dajjal, the great deceiver and false messiah, is among the most dramatic and terrifying major signs in Islamic teachings. Known as the Antichrist in other traditions, Dajjal will emerge as a powerful figure who spreads falsehood and misguidance, leading many astray.

Dajjal’s deception will be marked by extraordinary powers and miraculous feats, designed to test the faith of believers. His reign will be a time of great confusion, where truth and falsehood become difficult to discern.

Islamic texts describe Dajjal as blind in one eye, with the word 'Kafir' (disbeliever) written on his forehead. His emergence will coincide with widespread moral decay and the weakening of religious authority.

Believers are advised to seek refuge in prayer and remembrance of Allah to protect themselves from his deceit. The defeat of Dajjal will come through the descent of Prophet Isa (Jesus), who will slay him and restore justice.

The coming of Dajjal represents the ultimate test of faith before the final divine judgment. It reminds Muslims to hold firmly to their beliefs and maintain vigilance against deception in a world rife with spiritual challenges.`
  },
  {
    id: 32,
    title: 'Descent of Isa (Jesus)',
    realized: false,
    date: null,
    article: `The descent of Prophet Isa (Jesus) is a profound and awaited event in Islamic eschatology, occurring after the appearance of the Dajjal (Antichrist). According to Islamic belief, Isa was neither crucified nor killed but was raised alive to the heavens by Allah, and will return to Earth near the end times.

Isa’s return serves multiple divine purposes: to defeat the Dajjal, restore justice, and unify humanity under the true message of monotheism. He will break the cross, kill the swine, and abolish false religious practices.

His descent will mark a period of peace, where he will rule with fairness and guide people back to the worship of one God. Isa will also establish the rule of Shariah, correcting distortions that have crept into religious practices.

This event symbolizes hope and divine mercy, reassuring believers that truth will ultimately prevail. The return of Isa is a unifying moment for Muslims and Christians alike, emphasizing shared reverence for him as a prophet.

Believers are urged to prepare by strengthening their faith and ethical conduct, awaiting his arrival as a major sign of the impending Day of Judgment. Isa’s descent is the climax of the eschatological narrative, heralding the final phase of human history.`
  },
  {
    id: 33,
    title: 'Gog and Magog released',
    realized: false,
    date: null,
    article: `The release of Gog and Magog (Ya’juj and Ma’juj) is one of the most fearsome signs before the Last Day. Described in the Quran and Hadith, these two tribes or forces have been contained behind a barrier built by Dhul-Qarnayn, preventing their destruction on Earth until the appointed time.

Their release will unleash widespread chaos, violence, and corruption. Gog and Magog will swarm over the land, overwhelming nations with their vast numbers and brutal aggression. Their onslaught will lead to significant destruction and hardship for humanity.

This event symbolizes the peak of tribulation, highlighting the severity of the trials before divine intervention. It serves as a warning about the consequences of moral decay and disbelief.

Muslims are encouraged to remain patient, firm in faith, and reliant on Allah’s mercy during this period. The eventual defeat of Gog and Magog by divine intervention will usher in the next stages of the eschatological timeline.

The release of Gog and Magog teaches humanity about the limits of worldly power and the ultimate sovereignty of God. It underscores the importance of spiritual preparedness and trust in divine justice.`
  },
  {
    id: 34,
    title: 'Three major landslides',
    realized: false,
    date: null,
    article: `Three massive landslides are foretold as major signs of the approaching Day of Judgment. These landslides will occur in the East, West, and the Arabian Peninsula, drastically altering the physical landscape of the Earth.

The exact nature of these events is debated, but they symbolize overwhelming natural upheavals that signal divine displeasure with humanity’s moral state. The cataclysms will cause loss of life, destruction of infrastructure, and widespread fear.

Such geological upheavals remind people of the transient nature of the material world and the immense power of the Creator. They call for humility, repentance, and a renewed focus on spiritual values.

These landslides are among the extraordinary signs that will leave no doubt about the nearness of the Last Day, urging all to seek forgiveness and prepare for the Hereafter. They emphasize that the physical world will be dramatically transformed as a prelude to final judgment.`
  },
  {
    id: 35,
    title: 'The Smoke (Dukhan)',
    realized: false,
    date: null,
    article: `The appearance of a thick, pervasive smoke (Dukhan) is another major eschatological sign. This smoke will fill the skies, enveloping people across vast regions and causing great distress and suffering.

Described in the Quran, this smoke will be a divine punishment, affecting both the faithful and disbelievers. It may cause respiratory issues, fear, and widespread confusion, serving as a reminder of God’s power and the consequences of moral failure.

The smoke’s arrival will be unmistakable and serve as a clear warning for humanity to return to righteousness. It symbolizes divine wrath and the urgent need for spiritual purification.

The event calls believers to patience and steadfastness, trusting in Allah’s mercy even amid hardship. Dukhan reminds all that worldly trials are temporary and that ultimate justice awaits. It is a call to reflect on human actions and their spiritual consequences as the end times approach.`
  },
  {
    id: 36,
    title: 'The Beast (Dabbat al-Ard)',
    realized: false,
    date: null,
    article: `The emergence of the Beast of the Earth (Dabbat al-Ard) is a mysterious and striking major sign. This creature will appear on Earth and speak to humanity, marking a profound moment of divine communication.

The Beast’s role is to distinguish between believers and disbelievers, reinforcing the reality of faith and the existence of divine power. Its arrival will confirm the imminence of the Last Day.

While descriptions vary, it is considered a supernatural being sent by Allah to warn humanity and compel recognition of God’s sovereignty. The Beast’s appearance will be terrifying but purposeful, shaking human complacency.

This sign urges humanity to heed the message of faith and prepare for final judgment. It embodies the ultimate confrontation between truth and falsehood, calling all to acknowledge the Creator before it is too late.`
  },
  {
    id: 37,
    title: 'Sun rises from the West',
    realized: false,
    date: null,
    article: `One of the most extraordinary signs foretold is the sun rising from the West instead of the East. This cosmic reversal will be a clear, undeniable sign that the natural order created by Allah is being overturned as the Last Day approaches.

Such an event defies natural laws and signals a profound disruption in the universe. It is a dramatic indication that the time for repentance has passed, and the door to forgiveness will be closed.

Religious scholars interpret this as a moment when faith will no longer benefit those who did not believe previously, underscoring the urgency of sincere belief while opportunities remain.

This sign highlights the sovereignty of Allah over all creation and the finality of divine judgment. It reminds believers that nature itself will bear witness to the end times, calling humanity to recognize the truth before the final reckoning.`
  },
  {
    id: 38,
    title: 'Fire drives people to Mahshar',
    realized: false,
    date: null,
    article: `The final sign involves a great fire that will emerge and drive people toward the place of Mahshar — the gathering place before the Day of Judgment. This fire will compel all of humanity to gather for their ultimate reckoning.

The fire’s purpose is to physically and symbolically usher souls to the divine court, leaving no one behind. It represents the inevitability of accountability and the closing of worldly life.

This cataclysmic event will cause fear and urgency, signaling that the Day of Judgment is imminent. It serves as a last call to prepare one’s deeds and seek forgiveness.

The fire emphasizes the justice of Allah and the certainty of resurrection. It reminds humanity that no one can escape divine judgment, highlighting the importance of living a life rooted in righteousness and awareness of the Hereafter.`
  },
];

export default function Timeline() {
  const [selected, setSelected] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [direction, setDirection] = useState(null); // 'left' or 'right'

  // Trigger animation when selected changes
  useEffect(() => {
    if (direction) {
      const timer = setTimeout(() => {
        setAnimate(false);
        if (direction === "right") {
          setSelected(null);
        }
        setDirection(null);
      }, 500); // animation duration in ms
      return () => clearTimeout(timer);
    }
  }, [animate, direction]);

  const handleSelect = (sign) => {
    setDirection("left");
    setAnimate(true);
    // Delay showing selected details until animation completes
    setTimeout(() => {
      setSelected(sign);
    }, 300);
  };

  const handleBack = () => {
    setDirection("right");
    setAnimate(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {!selected && (
        <div
          className={`list-view ${animate && direction === "right" ? "slide-right-fade" : ""} ${
            animate && direction === "left" ? "slide-left-fade-out" : ""
          }`}
        >
          <ol className="w-full max-w-3xl">
            {signs.map((sign) => (
              <div
                key={sign.id}
                className={`mb-10 ms-4 cursor-pointer pl-4`}
                onClick={() => handleSelect(sign)}
              >
                <div className={`circle rounded-full mt-1.5 -start-1.5 border`}>
                  <div
                    className={`id-text w-full h-full text-xs font-bold text-black m-4 ${
                      sign.realized ? "realized link-to-next" : ""
                    }`}
                  >
                    {sign.id}
                  </div>
                  <time className="time-text mb-1 text-sm font-normal leading-none text-gray-400">
                    {sign.realized ? sign.date : "Pending"}
                  </time>
                </div>
                <h3 className="text-lg padding-text font-semibold text-white">{sign.title}</h3>
              </div>
            ))}
          </ol>
        </div>
      )}

      {selected && (
        <div
          className={`detail-view ${
            animate && direction === "left" ? "slide-left-fade-in" : ""
          } ${animate && direction === "right" ? "slide-right-fade-out" : ""}`}
        >
          <button
            onClick={handleBack}
            className="mb-4 text-blue-400 underline"
            disabled={animate}
          >
            ← Back
          </button>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-white border-opacity-20">
            <h2 className="text-2xl font-bold mb-4">{selected.title}</h2>
            <p className="text-lg leading-relaxed">{selected.article}</p>
            {selected.realized && <p className="mt-4 text-sm text-gray-400">Date: {selected.date}</p>}
          </div>
        </div>
      )}
    </div>
  );
}