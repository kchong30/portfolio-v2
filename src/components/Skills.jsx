import '../styles/Skills.css'
import jsLogo from '../assets/logos/js.png'
import htmlLogo from '../assets/logos/html5.png'
import cSharpLogo from '../assets/logos/csharp.png'
import pythonLogo from '../assets/logos/python.png'
import cssLogo from '../assets/logos/css.png'
import reactLogo from '../assets/logos/react.png'
import angularLogo from '../assets/logos/angular.png'
import vueLogo from '../assets/logos/vue.png'
import tailwindLogo from '../assets/logos/tailwind.png'
import bootstrapLogo from '../assets/logos/bootstrap.png'
import netcoreLogo from '../assets/logos/netcore.png'
import laravelLogo from '../assets/logos/laravel.png'
import sstLogo from '../assets/logos/sst.png'  
import mysqlLogo from '../assets/logos/mysql.png'
import mongodbLogo from '../assets/logos/mongodb.png'
import sqliteLogo from '../assets/logos/sqlite.png'
import cockroachdbLogo from '../assets/logos/cockroachdb.png'
import awsLogo from '../assets/logos/aws.png'
import azureLogo from '../assets/logos/azure.png'


function Skills() {
  return (
<div className= "skills-section">
  <div className="skills-row">
    <h3>Languages</h3>
    <div className="badge-grid">
      <div className="badge-icon"><img src={jsLogo} alt="JavaScript" />JavaScript</div>
      <div className="badge-icon"><img src={htmlLogo} alt="HTML 5" />HTML 5</div>
      <div className="badge-icon"><img src={cSharpLogo} alt="C#" />C#</div>
      <div className="badge-icon"><img src={pythonLogo} alt="Python" />Python</div>
      <div className="badge-icon"><img src={cssLogo} alt="CSS" />CSS</div>
    </div>
  </div>
  <div className="skills-row mt-6">
    <h3>Frameworks</h3>
    <div className="badge-grid">
      <div className="badge-icon"><img src={reactLogo} alt="React" /> React</div>
      <div className="badge-icon"><img src={angularLogo} alt="Angular" /> Angular</div>
      <div className="badge-icon"><img src={vueLogo} alt="Vue" /> Vue</div>
      <div className="badge-icon"><img src={tailwindLogo} alt="Tailwind" /> Tailwind</div>
      <div className="badge-icon"><img src={bootstrapLogo}alt="Bootstrap" /> Bootstrap</div>
      <div className="badge-icon"><img src={netcoreLogo} alt="ASP.NET" /> ASP.NET</div>
      <div className="badge-icon"><img src={laravelLogo} alt="Laravel" /> Laravel</div>
      <div className="badge-icon"><img src={sstLogo} alt="SST" />SST</div>
    </div>
  </div>
  <div className="skills-row mt-6">
    <h3>Databases</h3>
    <div className="badge-grid">
      <div className="badge-icon"><img src={mysqlLogo} alt="MySQL" /> MySQL</div>
      <div className="badge-icon-mongo"><img src={mongodbLogo} alt="MongoDB" /> MongoDB</div>
      <div className="badge-icon"><img src={sqliteLogo} alt="SQLite" /> SQLite</div>
      <div className="badge-icon"><img src={cockroachdbLogo} alt="CockroachDB" /> CockroachDB</div>
    </div>
  </div>
  <div className="skills-row ">
    <h3>Cloud Services</h3>
    <div className="badge-grid">
      <div className="badge-icon"><img src={awsLogo} alt="AWS" /> AWS</div>
      <div className="badge-icon"><img src={azureLogo} alt="Azure" /> Azure</div>
    </div>
  </div>
</div>
  )
}

export default Skills