const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const IMG = {
  // Hero / network
  fiberCables: u("1558494949-ef010cbdcc31", 1800),
  serverRoom: u("1544197150-b99a580bb7a8", 1600),
  cityFiber: u("1477959858617-67f85cf4f1df", 1800),
  technician: u("1581092160607-ee22621dd758"),
  routerDevice: u("1606904825846-647eb07f5be2"),
  installer: u("1621905251189-08b45d6a269e"),
  circuit: u("1518770660439-4636190af475", 1600),
  networkGlobe: u("1451187580459-43490279c0fa", 1600),
  dataDesk: u("1516321318423-f06f85e504b3", 1400),
  supportTeam: u("1519389950473-47ba0277781c", 1400),

  // TV / entertainment
  livingRoomTv: u("1593784991095-a205069470b6"),
  familyTv: u("1543269865-cbf427effbad"),
  sportsTv: u("1522778119026-d647f0596c20"),
  cinema: u("1522869635100-9f4c5e86aa37"),
  remoteControl: u("1593784991095-a205069470b6"),

  // Lifestyle
  remoteWork: u("1521737711867-e3b97375f902"),
  gaming: u("1542751371-adc38448a05e"),
  business: u("1497366216548-37526070297c"),
  smartHome: u("1558002038-1055907df827"),

  people1: u("1494790108377-be9c29b29330", 320),
  people2: u("1500648767791-00dcc994a43e", 320),
  people3: u("1534528741775-53994a69daeb", 320),
};
