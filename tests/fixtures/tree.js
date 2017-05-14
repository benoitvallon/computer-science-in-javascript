export const fullFixture = {
  data: 'ceo',
  children: [{
    data: 'cto',
    children: [{
      data: 'dev1',
      children: [],
    }, {
      data: 'dev2',
      children: [],
    }, {
      data: 'dev3',
      children: [],
    }],
  }, {
    data: 'cfo',
    children: [{
      data: 'accountant',
      children: [],
    }],
  }, {
    data: 'cmo',
    children: [],
  }],
}

export const removedCtoFixture = {
  data: 'ceo',
  children: [{
    data: 'cfo',
    children: [{
      data: 'accountant',
      children: [],
    }],
  },
  {
    data: 'cmo',
    children: [],
  }],
}

export const removedCfoFixture = {
  data: 'ceo',
  children: [{
    data: 'cmo',
    children: [],
  }],
}
