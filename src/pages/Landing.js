import SideNav from "../components/SideNav";
import SideBar from "../components/SideBar";
import Content from "../components/Content";
import image1 from '../images/1.jpg'
import image2 from '../images/2.jpg'
import image3 from '../images/3.jpg'
import GoogleDrive from "../images/gd.png";
import Dropbox from "../images/db.png";
import OneDrive from "../images/od.png";
import RightBar from '../components/RightBar'
import LeftMobileNav from '../components/LeftMobileNav'
import RightMobileNav from '../components/RightMobileNav'
import React, { Component } from 'react'

export default class Landing extends Component {
    constructor(props)
    {
        super(props)
        {
              this.state={
                slug: 1,
                Drives:[
                    {
                    id:1,
                    name:"Google Drive",
                    logo:GoogleDrive,
                    used:45.5,
                    total:50,
                    types:[
                        {
                        id:'Images',
                        type:'Images',
                        color:'#6371FE',
                        size:15300,
                        files:1756
                    },
                    {
                        id:'Documents',
                        type:'Documents',
                        color:'#17D092',
                        size:2560,
                        files:123
                    },
                    {
                        id:'Media',
                        type:'Media Files',
                        color:'#FF685F',
                        size:13400,
                        files:24
                    },
                    {
                        id:'Other',
                        type:'Other Files',
                        color:'#FDBF00',
                        size:13000,
                        files:454
                    },
                    {
                        id:'Unknown',
                        type:'Unknown Files',
                        color:'#6295FE',
                        size:740,
                        files:57
                    }],
                    folders:[
                        {
                            name:'Analytics',
                            members:[
                                    {
                                        image: image1,
                                        color: "#4A7FD3"
                                      },
                                      {
                                        image: image2,
                                        color: "#7B46A5"
                                      }
                            ],
                            files:[
                                {
                                    name:"Competitor Analysis Template",
                                    members:'1',
                                    date:'Sep 3, 2019',
                                    format:'PDF'
                                },
                                {
                                    name:"How to Create a Case Study",
                                    members:'2',
                                    date:'Jun 12, 2019',
                                    format:'DOC'
                                },
                                {
                                    name:"Landing Page Structure",
                                    members:'3',
                                    date:'Jul 17, 2019',
                                    format:'DOC'
                                },
                                {
                                    name:"Meeting Report",
                                    members:'2',
                                    date:'Aug 28, 2019',
                                    format:'PDF'
                                },
                                {
                                    name:"Project Documents",
                                    members:'1',
                                    date:'Aug 17, 2019',
                                    format:'ZIP'
                                },
                                {
                                    name:"Review Checklist Template",
                                    members:'3',
                                    date:'Sep 8, 2019',
                                    format:'DOC'
                                }
    
                            ]
                            
                        },
                        {
                            name:'Assets',
                            members:[
                                    {
                                        image: image1,
                                        color: "#4A7FD3"
                                      },
                                      {
                                        image: image2,
                                        color: "#7B46A5"
                                      }
                            ],
                            files:[
                                
                                {
                                    name:"How to Create a Case Study",
                                    members:'2',
                                    date:'Jun 12, 2019',
                                    format:'DOC'
                                },
                                {
                                    name:"Landing Page Structure",
                                    members:'3',
                                    date:'Jul 17, 2019',
                                    format:'DOC'
                                },
                                {
                                    name:"Meeting Report",
                                    members:'2',
                                    date:'Aug 28, 2019',
                                    format:'PDF'
                                },
                                {
                                    name:"Project Documents",
                                    members:'1',
                                    date:'Aug 17, 2019',
                                    format:'ZIP'
                                }
    
                            ]
                            
                        },
                        {
                            name:'Marketing',
                            members:[
                                    {
                                        image: image1,
                                        color: "#4A7FD3"
                                      },
                                      {
                                        image: image2,
                                        color: "#7B46A5"
                                      }
                            ],
                            files:[
                                {
                                    name:"Competitor Analysis Template",
                                    members:'1',
                                    date:'Sep 3, 2019',
                                    format:'PDF'
                                },
                                {
                                    name:"Meeting Report",
                                    members:'2',
                                    date:'Aug 28, 2019',
                                    format:'PDF'
                                },
                                {
                                    name:"Project Documents",
                                    members:'1',
                                    date:'Aug 17, 2019',
                                    format:'ZIP'
                                },
                                {
                                    name:"Review Checklist Template",
                                    members:'3',
                                    date:'Sep 8, 2019',
                                    format:'DOC'
                                }
    
                            ]
                            
                        },
                        {
                            name:'Templates',
                            members:[
                                    {
                                        image: image1,
                                        color: "#4A7FD3"
                                      },
                                      {
                                        image: image2,
                                        color: "#7B46A5"
                                      }
                            ],
                            files:[
                                {
                                    name:"Competitor Analysis Template",
                                    members:'1',
                                    date:'Sep 3, 2019',
                                    format:'PDF'
                                },
                                {
                                    name:"How to Create a Case Study",
                                    members:'2',
                                    date:'Jun 12, 2019',
                                    format:'DOC'
                                },
                                {
                                    name:"Landing Page Structure",
                                    members:'3',
                                    date:'Jul 17, 2019',
                                    format:'DOC'
                                },
                                {
                                    name:"Review Checklist Template",
                                    members:'3',
                                    date:'Sep 8, 2019',
                                    format:'DOC'
                                }
    
                            ]
                            
                        },
                        {
                            name:'Projects',
                            members:[
                                    {
                                        image: image1,
                                        color: "#4A7FD3"
                                      },
                                      {
                                        image: image2,
                                        color: "#7B46A5"
                                      }
                            ],
                            files:[
                                
                                {
                                    name:"Meeting Report",
                                    members:'2',
                                    date:'Aug 28, 2019',
                                    format:'PDF'
                                },
                                {
                                    name:"Project Documents",
                                    members:'1',
                                    date:'Aug 17, 2019',
                                    format:'ZIP'
                                },
                                {
                                    name:"Review Checklist Template",
                                    members:'3',
                                    date:'Sep 8, 2019',
                                    format:'DOC'
                                }
    
                            ]
                            
                        },
                        {
                            name:'Projectors Cources',
                            members:[
                                    {
                                        image: image1,
                                        color: "#4A7FD3"
                                      },
                                      {
                                        image: image2,
                                        color: "#7B46A5"
                                      }
                            ],
                            files:[
                                {
                                    name:"Competitor Analysis Template",
                                    members:'1',
                                    date:'Sep 3, 2019',
                                    format:'PDF'
                                },
                                {
                                    name:"How to Create a Case Study",
                                    members:'2',
                                    date:'Jun 12, 2019',
                                    format:'DOC'
                                }
    
                            ]
                            
                        }
                    ]
    
    
                },
                {
                    id:2,
                    name:"Dropbox",
                    logo:Dropbox,
                    used:1.2,
                    total:3,
                    types:[
                        {
                        id:'Images',
                        type:'Images',
                        color:'#6371FE',
                        size:200,
                        files:54
                        
                    },
                    {
                        id:'Documents',
                        type:'Documents',
                        color:'#17D092',
                        size:10,
                        files:8
                    },
                    {
                        id:'Media',
                        type:'Media Files',
                        color:'#FF685F',
                        size:500,
                        files:4
                        
                    },
                    {
                        id:'Other',
                        type:'Other Files',
                        color:'#FDBF00',
                        size:300,
                        files:90
                    },
                    {
                        id:'Unknown',
                        type:'Unknown Files',
                        color:'#6295FE',
                        size:190,
                        files:57
                    }],
                    folders:[
                        {
                            name:'Analytics',
                            members:[
                                    {
                                        image: image1,
                                        color: "#4A7FD3"
                                      },
                                      {
                                        image: image2,
                                        color: "#7B46A5"
                                      }
                            ],
                            files:[
                                {
                                    name:"Competitor Analysis Template",
                                    members:'1',
                                    date:'Sep 3, 2019',
                                    format:'PDF'
                                },
                                {
                                    name:"How to Create a Case Study",
                                    members:'2',
                                    date:'Jun 12, 2019',
                                    format:'DOC'
                                },
                                {
                                    name:"Landing Page Structure",
                                    members:'3',
                                    date:'Jul 17, 2019',
                                    format:'DOC'
                                },
                                {
                                    name:"Meeting Report",
                                    members:'2',
                                    date:'Aug 28, 2019',
                                    format:'PDF'
                                },
                                {
                                    name:"Project Documents",
                                    members:'1',
                                    date:'Aug 17, 2019',
                                    format:'ZIP'
                                },
                                {
                                    name:"Review Checklist Template",
                                    members:'3',
                                    date:'Sep 8, 2019',
                                    format:'DOC'
                                }
    
                            ]
                            
                        },
                        {
                            name:'Assets',
                            members:[
                                    {
                                        image: image1,
                                        color: "#4A7FD3"
                                      },
                                      {
                                        image: image2,
                                        color: "#7B46A5"
                                      }
                            ],
                            files:[
                                
                                {
                                    name:"How to Create a Case Study",
                                    members:'2',
                                    date:'Jun 12, 2019',
                                    format:'DOC'
                                },
                                {
                                    name:"Landing Page Structure",
                                    members:'3',
                                    date:'Jul 17, 2019',
                                    format:'DOC'
                                },
                                {
                                    name:"Meeting Report",
                                    members:'2',
                                    date:'Aug 28, 2019',
                                    format:'PDF'
                                },
                                {
                                    name:"Project Documents",
                                    members:'1',
                                    date:'Aug 17, 2019',
                                    format:'ZIP'
                                }
    
                            ]
                            
                        },
                        {
                            name:'Marketing',
                            members:[
                                    {
                                        image: image1,
                                        color: "#4A7FD3"
                                      },
                                      {
                                        image: image2,
                                        color: "#7B46A5"
                                      }
                            ],
                            files:[
                                {
                                    name:"Competitor Analysis Template",
                                    members:'1',
                                    date:'Sep 3, 2019',
                                    format:'PDF'
                                },
                                {
                                    name:"Meeting Report",
                                    members:'2',
                                    date:'Aug 28, 2019',
                                    format:'PDF'
                                },
                                {
                                    name:"Project Documents",
                                    members:'1',
                                    date:'Aug 17, 2019',
                                    format:'ZIP'
                                },
                                {
                                    name:"Review Checklist Template",
                                    members:'3',
                                    date:'Sep 8, 2019',
                                    format:'DOC'
                                }
    
                            ]
                            
                        },
                        {
                            name:'Templates',
                            members:[
                                    {
                                        image: image1,
                                        color: "#4A7FD3"
                                      },
                                      {
                                        image: image2,
                                        color: "#7B46A5"
                                      }
                            ],
                            files:[
                                {
                                    name:"Competitor Analysis Template",
                                    members:'1',
                                    date:'Sep 3, 2019',
                                    format:'PDF'
                                },
                                {
                                    name:"How to Create a Case Study",
                                    members:'2',
                                    date:'Jun 12, 2019',
                                    format:'DOC'
                                },
                                {
                                    name:"Landing Page Structure",
                                    members:'3',
                                    date:'Jul 17, 2019',
                                    format:'DOC'
                                },
                                {
                                    name:"Review Checklist Template",
                                    members:'3',
                                    date:'Sep 8, 2019',
                                    format:'DOC'
                                }
    
                            ]
                            
                        }
                    ]
    
    
                },{
                    id:3,
                    name:"OneDrive",
                    logo:OneDrive,
                    used:2.5,
                    total:3,
                    types:[
                        {
                        id:'Images',
                        type:'Images',
                        color:'#6371FE',
                        size:1000,
                        files:500
                    },
                    {
                        id:'Documents',
                        type:'Documents',
                        color:'#17D092',
                        size:900,
                        files:12,
                        
                    },
                    {
                        id:'Media',
                        type:'Media Files',
                        color:'#FF685F',
                        size:100,
                        files:23
                        
                    },
                    {
                        id:'Other',
                        type:'Other Files',
                        color:'#FDBF00',
                        size:450,
                        files:144
                    },
                    {
                        id:'Unknown',
                        type:'Unknown Files',
                        color:'#6295FE',
                        size:50,
                        files:10
                    }],
                    folders:[
                        {
                            name:'Analytics',
                            members:[
                                    {
                                        image: image1,
                                        color: "#4A7FD3"
                                      },
                                      {
                                        image: image2,
                                        color: "#7B46A5"
                                      }
                            ],
                            files:[
                                {
                                    name:"Competitor Analysis Template",
                                    members:'1',
                                    date:'Sep 3, 2019',
                                    format:'PDF'
                                },
                                {
                                    name:"How to Create a Case Study",
                                    members:'2',
                                    date:'Jun 12, 2019',
                                    format:'DOC'
                                },
                                {
                                    name:"Landing Page Structure",
                                    members:'3',
                                    date:'Jul 17, 2019',
                                    format:'DOC'
                                },
                                {
                                    name:"Meeting Report",
                                    members:'2',
                                    date:'Aug 28, 2019',
                                    format:'PDF'
                                },
                                {
                                    name:"Project Documents",
                                    members:'1',
                                    date:'Aug 17, 2019',
                                    format:'ZIP'
                                },
                                {
                                    name:"Review Checklist Template",
                                    members:'3',
                                    date:'Sep 8, 2019',
                                    format:'DOC'
                                }
    
                            ]
                            
                        },
                        {
                            name:'Assets',
                            members:[
                                    {
                                        image: image1,
                                        color: "#4A7FD3"
                                      },
                                      {
                                        image: image2,
                                        color: "#7B46A5"
                                      }
                            ],
                            files:[
                                
                                {
                                    name:"How to Create a Case Study",
                                    members:'2',
                                    date:'Jun 12, 2019',
                                    format:'DOC'
                                },
                                {
                                    name:"Landing Page Structure",
                                    members:'3',
                                    date:'Jul 17, 2019',
                                    format:'DOC'
                                },
                                {
                                    name:"Meeting Report",
                                    members:'2',
                                    date:'Aug 28, 2019',
                                    format:'PDF'
                                },
                                {
                                    name:"Project Documents",
                                    members:'1',
                                    date:'Aug 17, 2019',
                                    format:'ZIP'
                                }
    
                            ]
                            
                        },
                        {
                            name:'Projectors Cources',
                            members:[
                                    {
                                        image: image1,
                                        color: "#4A7FD3"
                                      },
                                      {
                                        image: image2,
                                        color: "#7B46A5"
                                      }
                            ],
                            files:[
                                {
                                    name:"Competitor Analysis Template",
                                    members:'1',
                                    date:'Sep 3, 2019',
                                    format:'PDF'
                                },
                                {
                                    name:"How to Create a Case Study",
                                    members:'2',
                                    date:'Jun 12, 2019',
                                    format:'DOC'
                                }
    
                            ]
                            
                        }
                    ]
    
                }
                ]
            }
        }
    }
    
    componentWillMount(){
        this.setState({
            slug: this.props.match.params.slug?this.props.match.params.slug:1
          })
      }
    render() {
        let Drives = this.state.Drives;
        const drive = this.state.Drives.find(drive => drive.id == this.state.slug);
        return (
            <>
        <div id='front' className='front' >
            <p style={{position:'absolute'}}>a</p>
        </div>
        <div className='nav-mobile'></div>
         <div className="contr" >
        <div className="colm-1"  >
          <SideNav/>
        </div>
        <div className='colm-12'>
            <LeftMobileNav drive={drive}/>
        </div>

        <div className="colm-2" >
          <SideBar drive={drive}/>
        </div>
        <div className="colm-3">
          <Content drive={drive} drives={Drives} slug={this.state.slug} />
        </div>
        <div className="colm-4">
          <RightBar drive={drive} />
        </div>
        <div className='colm-5'>
        <RightMobileNav drive={drive}/>
        </div>
      </div>
      </>

        )
    }
}





