export const state = {
  projectinfo: null,
  hostinfo: null,
  cpuinfo: null,
  memoryinfo: null,
  hostmonitordata: null,
  clusterservice: null
}

export const mutations = {
  Set_projectinfo: (state, projectinfo) => {
    state.projectinfo = projectinfo
  },
  Set_hostinfo: (state, hostinfo) => {
    state.hostinfo = hostinfo
  },
  Set_cpuinfo: (state, cpuinfo) => {
    state.cpuinfo = cpuinfo
  },
  Set_memoryInfo: (state, memoryinfo) => {
    state.memoryinfo = memoryinfo
  },
  Set_hostmonitordata: (state, hostmonitordata) => {
    state.hostmonitordata = hostmonitordata
  },
  Set_clusterservice: (state, clusterservice) => {
    for (var k in clusterservice) {
      for (var k0 in clusterservice[k].Info.Setting) {
        clusterservice[k].Info.Setting[k0].NewData = clusterservice[k].Setting[k0].Data
      }

      for (var k1 in clusterservice[k].Info.ModuleMonitor) {
        for (var k2 in clusterservice[k].Info.ModuleMonitor[k1].Setting) {
          clusterservice[k].Info.ModuleMonitor[k1].Setting[k2].NewData = clusterservice[k].Info.ModuleMonitor[k1].Setting[k2].Data
        }
      }
    }
    state.clusterservice = clusterservice
  },
}
