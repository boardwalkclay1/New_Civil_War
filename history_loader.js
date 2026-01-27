/* HISTORY LOADER – FULL EXPANDED VERSION */
/* All data is original narrative text, no long verbatim quotes. */
/* Wires into: cwOverviewQuotes, cwRolesStories, slaveryStories, reconstructionStories, jimCrowStories, civilRightsStories, modernContinuityLinks */

document.addEventListener("DOMContentLoaded", () => {
  const role = Storage.load("role", null);

  renderSectionStories("cwOverviewQuotes", civilWarOverviewStories);
  renderSectionStories("cwRolesStories", civilWarRoleStories);
  renderSectionStories("slaveryStories", slaveryStories);
  renderSectionStories("reconstructionStories", reconstructionStories);
  renderSectionStories("jimCrowStories", jimCrowStories);
  renderSectionStories("civilRightsStories", civilRightsStories);
  renderModernContinuity("modernContinuityLinks", role);
});

/* -------------------------------------------------
   RENDER HELPERS
--------------------------------------------------*/

function renderSectionStories(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container || !items || !items.length) return;

  items.forEach(item => {
    const block = document.createElement("article");
    block.className = "history-story";

    if (item.title) {
      const title = document.createElement("h3");
      title.textContent = item.title;
      block.appendChild(title);
    }

    if (item.year || item.range) {
      const meta = document.createElement("p");
      meta.className = "history-year";
      meta.textContent = item.range || item.year;
      block.appendChild(meta);
    }

    if (item.summary) {
      const summary = document.createElement("p");
      summary.className = "history-summary";
      summary.textContent = item.summary.trim();
      block.appendChild(summary);
    }

    if (item.body && item.body.length) {
      item.body.forEach(par => {
        const p = document.createElement("p");
        p.className = "history-text";
        p.textContent = par.trim();
        block.appendChild(p);
      });
    }

    if (item.tags && item.tags.length) {
      const tags = document.createElement("p");
      tags.className = "history-tags";
      tags.textContent = "Roles / Themes: " + item.tags.join(", ");
      block.appendChild(tags);
    }

    container.appendChild(block);
  });
}

function renderModernContinuity(containerId, role) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const intro = document.createElement("p");
  intro.className = "history-text";
  intro.textContent = role
    ? `You are currently assigned role #${role.number} (${role.name}), in the category "${role.category}". Below are historical echoes of your function.`
    : "Once you complete the role assessment, this section will connect your role to historical examples.";
  container.appendChild(intro);

  const matches = matchRoleToHistory(role);
  if (matches.length) {
    const list = document.createElement("ul");
    list.className = "history-role-links";

    matches.forEach(m => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${m.person}</strong> – ${m.summary}
        <br><span class="history-year">${m.period}</span>
        <br><span class="history-tags">Mapped to: ${m.mappedRole}</span>
      `;
      list.appendChild(li);
    });

    container.appendChild(list);
  }

  const nav = document.createElement("p");
  nav.className = "history-text";
  nav.innerHTML = `
    View your <a href="profile.html">Profile</a> or your
    <a href="role_result.html">Role Result</a> to see how your skills, decisions, and
    situational responses align with these historical patterns.
  `;
  container.appendChild(nav);
}

/* -------------------------------------------------
   CIVIL WAR OVERVIEW – 10× EXPANDED
--------------------------------------------------*/

const civilWarOverviewStories = [
  {
    title: "The Central Conflict: Slavery, Power, and the Fate of the Union",
    range: "1861–1865",
    summary: `
      The American Civil War was not an accident or a misunderstanding. It was the violent collision of
      two systems that had been growing apart for decades.
    `,
    body: [
      `
      By the mid‑19th century, the United States was split between a slaveholding South and a North that
      was increasingly industrial, urban, and politically divided over slavery. Southern leaders openly
      described slavery as the foundation of their economy and social order. They built laws, culture,
      and political power around the idea that some people could be owned, controlled, and exploited for
      life. Northern states were far from unified on racial equality, but many opposed the expansion of
      slavery into new territories, seeing it as both a moral wrong and a threat to free labor.
      `,
      `
      Throughout the 1840s and 1850s, every new territory raised the same question: would it be free or
      slave? Each compromise—Missouri, Kansas‑Nebraska, the Fugitive Slave Act—pushed the country closer
      to a breaking point. Enslaved people resisted in ways large and small: escaping, sabotaging work,
      preserving culture, and telling their stories. Abolitionists, both Black and white, organized
      newspapers, lectures, and underground networks. The conflict was not just in Congress; it was in
      homes, churches, and streets.
      `,
      `
      When Abraham Lincoln won the 1860 election without carrying a single Deep South state, many Southern
      politicians concluded that their long‑term power inside the Union was collapsing. Secession began
      almost immediately. South Carolina left first, followed by other states that formed the Confederate
      States of America. Their founding documents made it clear: they were leaving to protect slavery and
      the racial hierarchy it enforced.
      `,
      `
      The war that followed was catastrophic. Battles like Antietam, Gettysburg, and Shiloh left fields
      covered in bodies. Disease, hunger, and exposure killed many more than bullets did. Civilians were
      displaced, farms were destroyed, and entire regions were transformed. Yet even in the middle of this
      destruction, enslaved people continued to escape, resist, and push the boundaries of freedom.
      `,
      `
      For this app, the Civil War is not just a list of battles. It is a moment when communication,
      logistics, documentation, and mutual aid became matters of survival. Couriers carried messages
      through dangerous territory. Quartermasters tried to keep armies fed and clothed. Nurses and
      volunteers built improvised systems of care. Writers and observers recorded what they saw, shaping
      how future generations would understand the conflict. Every modern role in this app has an ancestor
      in this period.
      `,
      `
      When you see your role number and category, you are not just looking at a label. You are looking at
      a position in a long chain of people who had to make decisions under pressure, often with incomplete
      information and real consequences. The Civil War shows how high the stakes can be when systems
      break down and when people are forced to choose what they will protect, what they will build, and
      what they will refuse to accept.
      `
    ],
    tags: ["Civil War", "Slavery", "Union", "Confederacy", "Narrative"]
  },
  {
    title: "Emancipation, Strategy, and the Transformation of the War",
    year: "1863",
    summary: `
      The Emancipation Proclamation did more than change legal language. It changed the meaning of the war
      and the structure of power on the ground.
    `,
    body: [
      `
      At the start of the Civil War, the official Union goal was to preserve the United States as a single
      nation. Many Northern leaders were cautious about making the war explicitly about ending slavery,
      fearing that border states might leave the Union or that public support would fracture. But as the
      war dragged on, it became clear that the Confederacy’s strength depended on enslaved labor. Enslaved
      people built fortifications, harvested crops, transported supplies, and maintained the economy that
      fed the Confederate war machine.
      `,
      `
      On the ground, enslaved people were already reshaping the conflict. Many fled to Union lines whenever
      they could, forcing Union commanders to decide whether to return them, treat them as “contraband,”
      or recognize their freedom. These decisions were not abstract; they were made in camps, on roads,
      and in captured towns. Every person who escaped weakened the Confederacy and strengthened the Union.
      `,
      `
      When Lincoln issued the Emancipation Proclamation in 1863, it declared that enslaved people in
      Confederate‑held territories were free. It did not immediately free everyone, but it sent a clear
      signal: the Union was now officially fighting against slavery. This opened the door for Black men to
      enlist in the Union Army, and nearly 200,000 did so by the end of the war. Their service added
      critical manpower and moral force to the Union cause.
      `,
      `
      The proclamation also had international consequences. European powers had been watching the conflict,
      weighing whether to recognize the Confederacy. Once the war was explicitly tied to ending slavery,
      it became much harder for them to justify supporting a slaveholding rebellion. The Union gained
      diplomatic strength, and the Confederacy lost potential allies.
      `,
      `
      In terms of roles, the Emancipation Proclamation is a case study in how information, messaging, and
      timing can reshape an entire conflict. It shows the power of a signal that is both moral and strategic.
      People who worked on speeches, public letters, and policy language were doing the work of modern
      Broadcasters, Designers, and Chroniclers. They were not on the front lines with rifles, but they
      were changing what the front lines meant.
      `,
      `
      When you think about your role in this app—whether you are mapped to information flow, logistics,
      documentation, or mutual aid—remember that major historical shifts often depended on people who
      could see how narrative, law, and strategy fit together. The Emancipation Proclamation is one of
      those moments, and it sits in the same family of work as your role.
      `
    ],
    tags: ["Emancipation", "Union Strategy", "Black Soldiers", "Narrative Shift"]
  }
];

/* -------------------------------------------------
   CIVIL WAR ROLES & FUNCTIONS – 10× EXPANDED
--------------------------------------------------*/

const civilWarRoleStories = [
  {
    title: "Signalers, Telegraph Operators, and Couriers",
    range: "1861–1865",
    summary: `
      Communication in the Civil War was slow, fragile, and absolutely decisive. Messages could mean the
      difference between a successful maneuver and a disaster.
    `,
    body: [
      `
      Before radios and digital networks, armies relied on a patchwork of communication methods: flags,
      lanterns, written orders, and telegraph lines. Signalers used visual codes to send messages across
      distances, sometimes from hilltops or towers. Telegraph operators tapped out messages over wires
      that could be cut, intercepted, or destroyed. Couriers carried written orders on horseback, moving
      through terrain that could be muddy, dangerous, or actively contested.
      `,
      `
      Every delay or error had consequences. If a message arrived late, a unit might attack without support
      or fail to retreat in time. If a telegraph line was cut, commanders could be left guessing about
      enemy movements. Some officers were skilled at reading incomplete information and making decisions
      anyway; others were paralyzed by uncertainty. The entire system depended on people who could move
      information quickly and accurately under pressure.
      `,
      `
      Signalers and telegraph operators often worked in cramped, stressful conditions. They had to stay
      focused for long hours, sometimes under fire. Couriers had to memorize routes, avoid capture, and
      keep moving even when exhausted. Many of them were young, and their work rarely made headlines, but
      campaigns depended on them.
      `,
      `
      In this app, roles like Signal Runner and Verifier echo this work. A Signal Runner is someone who
      moves information clearly and quickly when others are overwhelmed or confused. A Verifier is someone
      who checks details, confirms sources, and makes sure that what is being passed along is accurate.
      These roles are not glamorous, but they are essential. Without them, groups act on rumors, guesses,
      and half‑truths.
      `,
      `
      When you see yourself mapped to an information role, you are standing in a long line of people who
      carried messages, maintained networks, and tried to keep chaos from swallowing everything. The tools
      have changed, but the function is the same: keep the signal clear when the stakes are high.
      `
    ],
    tags: ["Signal Runner", "Verifier", "Information Flow"]
  },
  {
    title: "Quartermasters, Supply Lines, and the Hidden Backbone of Armies",
    summary: `
      Armies do not move on courage alone. They move on food, clothing, ammunition, and transport—and
      someone has to coordinate all of that.
    `,
    body: [
      `
      Quartermasters were responsible for making sure soldiers had what they needed to function: uniforms,
      boots, blankets, tents, tools, and more. They arranged transport for supplies, managed warehouses,
      and tried to keep track of what was where. When supply lines were secure, armies could move with
      confidence. When they broke down, soldiers went hungry, equipment failed, and morale collapsed.
      `,
      `
      The work was complex and often thankless. Quartermasters had to deal with incomplete information,
      corrupt contractors, bad roads, and sudden changes in plans. They had to anticipate needs before
      they became crises. A delayed shipment of boots could mean soldiers marching with bleeding feet.
      A missing wagon train could mean a unit running out of ammunition at the worst possible moment.
      `,
      `
      In many campaigns, the outcome was shaped as much by logistics as by battlefield tactics. Armies
      that could not feed themselves or move their supplies were forced to retreat or stall. Commanders
      who understood logistics treated quartermasters as strategic partners, not just clerks.
      `,
      `
      In this app, roles like Quartermaster, Distributor, and Mapper carry that same energy. A Quartermaster
      is someone who keeps track of resources and makes sure they get where they need to go. A Distributor
      focuses on fair and efficient allocation. A Mapper understands routes, choke points, and how to move
      people or supplies through real space.
      `,
      `
      If you are mapped to one of these roles, you are part of the hidden backbone of any effort. You may
      not always be visible, but nothing works without you. The Civil War shows how entire campaigns could
      rise or fall on the strength of people doing this kind of work.
      `
    ],
    tags: ["Quartermaster", "Distributor", "Mapper", "Supplies & Resource Management"]
  },
  {
    title: "Writers, Correspondents, and Keepers of Memory",
    summary: `
      While armies fought, writers, correspondents, and diarists recorded what they saw. Their work shaped
      how the war would be remembered.
    `,
    body: [
      `
      Newspapers sent correspondents to the front lines to report on battles, conditions, and politics.
      Soldiers wrote letters home describing what they experienced. Some kept diaries that captured their
      fears, doubts, and observations. These documents did not just inform people in the moment; they
      became the raw material for how future generations would understand the war.
      `,
      `
      Many of these writers had to navigate censorship, propaganda, and personal risk. Some governments
      tried to control what could be published, fearing that honest reporting would damage morale or
      reveal weaknesses. Writers had to decide what to include, what to leave out, and how to balance
      loyalty with truth.
      `,
      `
      Enslaved people and formerly enslaved people also told their stories, sometimes during the war and
      sometimes after. Their accounts challenged narratives that tried to minimize or justify slavery.
      They described violence, resistance, and survival in ways that could not be ignored once written
      down. These narratives are part of the foundation of any honest understanding of the Civil War era.
      `,
      `
      In this app, roles like Chronicler and Historian echo this work. A Chronicler records events as they
      happen, preserving details that might otherwise be lost. A Historian looks for patterns, context,
      and meaning over time. Both roles are about memory and accountability.
      `,
      `
      If you are mapped to one of these roles, you are part of the long tradition of people who refuse to
      let important events disappear into silence. You help make sure that what happens is seen, understood,
      and remembered.
      `
    ],
    tags: ["Chronicler", "Historian", "Narrative", "Documentation"]
  }
];

/* -------------------------------------------------
   SLAVERY & RESISTANCE – 10× EXPANDED
--------------------------------------------------*/

const slaveryStories = [
  {
    title: "Enslaved Resistance and Everyday Defiance",
    summary: `
      Slavery was a system of violence and control, but it was never a system of total obedience. Enslaved
      people resisted in ways that were visible and invisible.
    `,
    body: [
      `
      On plantations, in cities, and in households, enslaved people found ways to push back against the
      system that tried to own them. Some forms of resistance were direct: escape attempts, revolts,
      and open defiance. Others were quieter but still powerful: working slowly, breaking tools, preserving
      banned cultural practices, teaching each other to read, or passing along news and rumors that
      undermined the stories enslavers told about themselves.
      `,
      `
      These acts carried enormous risk. Punishments could be brutal and public, designed to scare others
      into compliance. Yet resistance continued because people refused to accept that their lives and
      futures belonged to someone else. They built networks of trust, shared information, and watched for
      opportunities to move, hide, or protect one another.
      `,
      `
      In many places, enslaved people developed informal communication systems. Messages might be passed
      through songs, coded language, or seemingly ordinary conversations. People learned who could be
      trusted and who could not. They tracked patrol routes, escape paths, and the moods of those who
      claimed to own them.
      `,
      `
      In this app, roles like Signal Runner, Helper, and Builder echo this kind of work. A Signal Runner
      moves information quietly and carefully. A Helper focuses on direct support, often without recognition.
      A Builder creates and maintains the structures—social, emotional, or logistical—that allow people
      to survive and resist.
      `,
      `
      When you see yourself mapped to one of these roles, you are connected to a long history of people
      who did what they could with what they had, often under conditions that were meant to crush them.
      Their work was not always recorded, but it was essential.
      `
    ],
    tags: ["Resistance", "Mutual Aid", "Information Flow"]
  },
  {
    title: "Underground Networks and the Work of Escape",
    summary: `
      The Underground Railroad was not a literal railroad. It was a loose, shifting network of routes,
      safe houses, and people willing to take risks.
    `,
    body: [
      `
      Escaping slavery required planning, timing, and courage. People had to know when patrols were light,
      where sympathetic households might be, and how to navigate unfamiliar terrain. Some escapes were
      solo efforts; others involved guides and organized routes. The term “Underground Railroad” became a
      way to describe this hidden infrastructure.
      `,
      `
      The network included Black and white allies, free and enslaved people, urban and rural communities.
      Some participants provided shelter or food. Others offered information, forged documents, or transport.
      Many did not see themselves as heroes; they saw themselves as doing what was necessary and right.
      `,
      `
      The work was dangerous. People who helped escapees risked fines, imprisonment, violence, or worse.
      Enslaved people who were caught trying to escape faced severe punishment. Yet the network persisted,
      adapting to new laws and new threats.
      `,
      `
      In this app, roles like Mapper, Coordinator, and Quartermaster mirror this kind of organizing. A
      Mapper understands routes and safe paths. A Coordinator connects people and resources. A Quartermaster
      makes sure that what is needed is available when it matters.
      `,
      `
      If your role leans toward planning, mapping, or resource management, you are standing in the tradition
      of people who built and maintained escape routes under constant threat. Their work was quiet, careful,
      and life‑changing.
      `
    ],
    tags: ["Mapper", "Coordinator", "Quartermaster", "Mutual Aid"]
  },
  {
    title: "Narratives, Testimony, and the Fight Against Erasure",
    summary: `
      After escaping or being freed, many formerly enslaved people told their stories. These narratives
      challenged the lies that had justified slavery.
    `,
    body: [
      `
      In the 19th century, some formerly enslaved people wrote or dictated detailed accounts of their lives.
      They described family separations, forced labor, violence, resistance, and the complex emotional
      landscape of living under constant threat. These narratives were often published with the help of
      abolitionist networks, but the core of the story came from the people who had lived it.
      `,
      `
      These accounts were not just personal stories; they were political documents. They exposed the gap
      between the ideals of freedom and the reality of slavery. They gave readers in the North and abroad
      a direct window into a system that many had tried to sanitize or ignore.
      `,
      `
      In many ways, these narratives functioned like early investigative reporting and testimony. They
      documented abuses, named locations, and described patterns. They made it harder for defenders of
      slavery to claim ignorance or innocence.
      `,
      `
      In this app, roles like Chronicler and Historian carry that same energy. A Chronicler records what
      is happening now, especially when others would prefer silence. A Historian looks back, connects
      events, and refuses to let important truths be buried.
      `,
      `
      If you are mapped to one of these roles, you are part of a lineage of people who use words and
      memory as tools of resistance. You help ensure that what happens is not erased.
      `
    ],
    tags: ["Chronicler", "Historian", "Narrative", "Testimony"]
  }
];

/* -------------------------------------------------
   RECONSTRUCTION – 10× EXPANDED
--------------------------------------------------*/

const reconstructionStories = [
  {
    title: "Building Schools, Churches, and New Institutions",
    range: "1865–1877",
    summary: `
      After the Civil War, newly freed people and their allies tried to build new systems in the ruins of
      the old. Reconstruction was brief, fragile, and full of possibility.
    `,
    body: [
      `
      When slavery formally ended, freedom did not come with a manual. People had to figure out how to
      build lives, communities, and institutions in a landscape still hostile to their existence. Schools
      became one of the first priorities. Parents, teachers, and organizers worked together to create
      spaces where children and adults could learn to read, write, and navigate a world that had been
      closed to them.
      `,
      `
      Churches also played a central role. They were not just religious spaces; they were hubs for
      organizing, mutual aid, and political education. Leaders emerged who could speak, plan, and connect
      local struggles to larger movements. These institutions provided structure and support in a time of
      uncertainty.
      `,
      `
      At the same time, Black people began to participate in formal politics. Some were elected to local,
      state, and even national office. They pushed for laws that would protect civil rights, expand
      education, and rebuild infrastructure. For a brief period, it seemed possible that the United States
      might move toward a more inclusive democracy.
      `,
      `
      But Reconstruction faced fierce backlash. White supremacist groups used violence and intimidation to
      undermine elections, attack communities, and assassinate leaders. Many white politicians in the North
      lost interest in enforcing Reconstruction policies. Over time, federal support weakened, and many of
      the gains were rolled back.
      `,
      `
      In this app, roles like Builder, Coordinator, and Helper echo the work of Reconstruction. Builders
      create and maintain institutions. Coordinators connect people and efforts. Helpers provide direct
      support to individuals and families. These roles are about constructing something durable in a
      hostile environment.
      `,
      `
      If you are mapped to one of these roles, you are connected to the people who tried to build schools,
      churches, and political structures in the face of organized resistance. Their work shows that
      building is not just about materials; it is about courage, patience, and persistence.
      `
    ],
    tags: ["Builder", "Coordinator", "Mutual Aid", "Institutions"]
  }
];

/* -------------------------------------------------
   JIM CROW – 10× EXPANDED
--------------------------------------------------*/

const jimCrowStories = [
  {
    title: "Segregation, Violence, and Everyday Survival",
    summary: `
      After Reconstruction, a new system of racial control emerged: Jim Crow. It combined laws, customs,
      and violence to enforce segregation and inequality.
    `,
    body: [
      `
      Jim Crow was not just a set of laws; it was a way of organizing society. Black people were pushed
      into separate schools, neighborhoods, and public spaces. Voting rights were stripped away through
      poll taxes, literacy tests, and intimidation. Economic opportunities were limited by discrimination
      in hiring, pay, and housing.
      `,
      `
      Violence backed up this system. Lynching, police brutality, and mob attacks were used to send a
      message: any challenge to the racial order could be met with deadly force. Many of these acts went
      unpunished, reinforcing the idea that Black lives were not protected by the law.
      `,
      `
      Yet even under these conditions, people organized. They built their own schools, businesses,
      newspapers, and social clubs. They created mutual aid societies to help with funerals, medical
      costs, and emergencies. They formed legal defense funds and advocacy groups.
      `,
      `
      In this app, roles like Broadcaster, Helper, and Builder reflect this kind of work. Broadcasters
      share information and stories that might otherwise be suppressed. Helpers provide direct support
      when official systems fail. Builders create alternative structures that allow communities to survive
      and grow.
      `,
      `
      If your role leans toward communication, support, or institution‑building, you are connected to the
      people who navigated Jim Crow with creativity and determination. They found ways to live, resist,
      and care for each other in a system designed to break them.
      `
    ],
    tags: ["Segregation", "Mutual Aid", "Narrative", "Community"]
  }
];

/* -------------------------------------------------
   CIVIL RIGHTS MOVEMENTS – 10× EXPANDED
--------------------------------------------------*/

const civilRightsStories = [
  {
    title: "The Montgomery Bus Boycott and Coordinated Resistance",
    range: "1955–1956",
    summary: `
      The Montgomery Bus Boycott is often remembered as a single event, but it was actually a long,
      carefully coordinated campaign that depended on many different roles.
    `,
    body: [
      `
      When Black residents of Montgomery, Alabama, decided to boycott the city buses after a woman was
      arrested for refusing to give up her seat, they knew it would not be a one‑day protest. They were
      committing to a long struggle that would require planning, communication, and mutual support.
      `,
      `
      Organizers created carpool systems so people could still get to work. They printed leaflets, held
      meetings, and used churches as communication hubs. They raised money to support those who were
      targeted or lost income. Lawyers worked on legal strategies while speakers kept morale high.
      `,
      `
      The boycott lasted more than a year. It faced harassment, arrests, and violence. Yet it held
      together because people took on specific roles and responsibilities. Some focused on logistics,
      others on messaging, others on legal work, and others on direct support.
      `,
      `
      In this app, roles like Coordinator, Quartermaster, Signal Runner, and Chronicler all appear in this
      story. Coordinators kept the system moving. Quartermasters managed resources. Signal Runners spread
      information quickly. Chroniclers documented what was happening for future generations.
      `,
      `
      If you are mapped to one of these roles, you are connected to the people who turned a local protest
      into a sustained campaign that changed national law. Their work shows how coordinated effort can
      transform a city and send a signal far beyond its borders.
      `
    ],
    tags: ["Coordinator", "Quartermaster", "Signal Runner", "Chronicler"]
  },
  {
    title: "Student Sit‑ins, Freedom Rides, and Youth‑Led Action",
    summary: `
      Young people played a central role in the Civil Rights era. They organized sit‑ins, Freedom Rides,
      and voter registration drives that pushed the movement forward.
    `,
    body: [
      `
      Student activists challenged segregation by sitting at lunch counters, riding interstate buses, and
      attempting to register to vote in places where Black people had been systematically excluded. These
      actions were not spontaneous; they were planned, trained, and coordinated.
      `,
      `
      Participants attended workshops on nonviolent resistance, learned how to respond to harassment and
      violence, and built support networks to help those who were arrested or injured. They used media
      strategically, knowing that images of peaceful protesters being attacked could shift public opinion.
      `,
      `
      Behind every visible action was a network of people doing less visible work: arranging transportation,
      printing flyers, collecting donations, writing press releases, and keeping records. These roles were
      essential to sustaining the movement.
      `,
      `
      In this app, roles across Information Flow, Logistics & Planning, Documentation & Storytelling, and
      Mutual Aid & Support are all present in these stories. The movement needed planners, communicators,
      documenters, and caregivers.
      `,
      `
      If your role leans toward planning, communication, or support, you are connected to the students and
      young organizers who took enormous risks to push the country toward a different future.
      `
    ],
    tags: ["Information Flow", "Logistics & Planning", "Mutual Aid & Support", "Narrative"]
  }
];

/* -------------------------------------------------
   MODERN CONTINUITY & YOUR ROLE – 10× EXPANDED
--------------------------------------------------*/

function matchRoleToHistory(role) {
  if (!role) return [];

  const matches = [];

  switch (role.category) {
    case "Information Flow":
      matches.push({
        person: "Telegraph Operators and Signal Corps in the Civil War",
        period: "1861–1865",
        mappedRole: "Signal Runner / Verifier",
        summary:
          "They moved critical messages across dangerous distances with limited tools. Your role echoes their work: keeping information clear and timely when it matters most."
      });
      matches.push({
        person: "Black Newspapers and Community Media Under Jim Crow",
        period: "Late 19th–20th century",
        mappedRole: "Broadcaster / Designer",
        summary:
          "They provided news, analysis, and perspective that mainstream outlets ignored or distorted. Your communication role sits in that same tradition of alternative, community‑centered information."
      });
      break;

    case "Supplies & Resource Management":
      matches.push({
        person: "Quartermasters in Civil War Armies",
        period: "1861–1865",
        mappedRole: "Quartermaster / Distributor",
        summary:
          "They kept armies supplied with food, clothing, and equipment. Your role mirrors their responsibility for making sure resources are where they need to be."
      });
      matches.push({
        person: "Mutual Aid Societies in Jim Crow Communities",
        period: "Late 19th–20th century",
        mappedRole: "Helper / Builder",
        summary:
          "They organized funds, support, and services when official systems excluded Black communities. Your work with resources and support connects directly to theirs."
      });
      break;

    case "Logistics & Planning":
      matches.push({
        person: "Organizers of the Montgomery Bus Boycott",
        period: "1955–1956",
        mappedRole: "Coordinator",
        summary:
          "They designed carpools, schedules, and communication systems that kept a year‑long boycott running. Your planning role echoes their ability to turn intention into structure."
      });
      break;

    case "Documentation & Storytelling":
      matches.push({
        person: "Writers of Slave Narratives and Civil War Diaries",
        period: "19th century",
        mappedRole: "Chronicler / Historian",
        summary:
          "They recorded experiences that might otherwise have been erased. Your role continues that work of preserving truth and context."
      });
      break;

    case "Narrative & Media":
      matches.push({
        person: "Civil Rights Era Photographers and Filmmakers",
        period: "1950s–1960s",
        mappedRole: "Broadcaster / Designer",
        summary:
          "They captured images and stories that shifted public opinion and documented state violence. Your media role sits in that same line of narrative power."
      });
      break;

    case "Mutual Aid & Support":
      matches.push({
        person: "Community Organizers, Teachers, and Church Networks",
        period: "Reconstruction through Civil Rights era",
        mappedRole: "Helper / Builder",
        summary:
          "They provided emotional, material, and spiritual support in hostile environments. Your support role continues their work of holding communities together."
      });
      break;
  }

  return matches;
}
