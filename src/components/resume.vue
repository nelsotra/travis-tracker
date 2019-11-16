<template>
    <div>
        <h3>Travis Nelson</h3>
        <hr />
        <div>
        <code>
            I'm a Software Engineer, Medical Technologist, Chemical Engineer, and a little bit of a Physicist.
            But mainly I'm a Software Engineer these days.  I love challenging myself and learning new things (I do have 5 degrees after all),
            and in addition to being an amazing engineer, I'm also passionate about long distance
            hiking and biking - I've hiked the triple crown and biked across countries.  <br>I realize that I have an
            unusual and eclectic background, but what all of these things have in common is that I'm constantly
            searching for jobs and experiences that are meaningful and fulfilling.
        </code>
        </div>

        <br>
        <h4>Education</h4>
        <hr />
        <ul>
            <li class="listCircle"><strong>MS</strong> Computer Science - Georgia Tech, 2019, GPA: 4.0</li>
            <li class="listCircle"><strong>BS</strong> Computer Science - Oregon State University, 2015, GPA: 4.0</li>
            <li class="listCircle"><strong>MS</strong> Physics - University of Washington, 2013, GPA: 3.92</li>
            <li class="listCircle">Clinical Lab Science - Sanford USD Medical Center, 2008, ASCP Certified</li>
            <li class="listCircle"><strong>BS</strong> Chemical Engineering - SD School of Mines and Technology, 2001, GPA: 3.98</li>
        </ul>

        <h4>Work Experience</h4>
        <hr />
        <div>
            <p class="bottom"><span class="blueHeading">Software Engineer</span>, HCA Healthcare, Sept 2018 - Current</p>

            <p class="indent">Backend</p>
            <ul class="bottom">
                <li class="listCircle">Created a Golang server with API endpoints for Big Data (Hadoop) Healthcheck automated scripts</li>
                <li class="listCircle">Python/Kotlin scripts used to determine status of dev/qa/prod instances of Impala, Hive, and Hbase</li>
                <li class="listCircle">CI/CD used for code review/deployment in Azure DevOps</li>
            </ul>

            <p class="indent">Frontend</p>
            <ul class="bottom">
                <li class="listCircle">Designed and Created a UI Dashboard with React to display status of Healthcheck automated scripts</li>
                <li class="listCircle">Designed and Created a UI for HCA’s Watchdog application with Vue JS</li>
                <li class="listCircle">Monitoring and alerting provided via email/webhooks</li>
            </ul>

            <p class="indent">SRE</p>
            <ul class="bottom">
                <li class="listCircle">Automated Data Science Product workflows using Python scripts running on Airflow</li>
                <li class="listCircle">DataRobot’s API used to provide scores for the Data Science Products</li>
                <li class="listCircle">Created Airflow healthchecks to monitor “freshness” of data used in CSG’s Nate application</li>
                <li class="listCircle">Created Ansible Playbooks to automate spinning up/down of Openshift Pods for testing</li>
            </ul>

            <p class="indent">Process Improvement</p>
            <ul class="bottom">
                <li class="listCircle">Replaced Jitterbit by pushing Salesforce events into Kafka with Streamsets</li>
            </ul>
            <br>
            <p class="bottom"><span class="blueHeading">Medical Technologist</span>, night shift, core lab – Chemistry, Hematology, Microbiology, Blood Bank</p>
            <ul class="bottom">
                <li class="listCircle"><strong>SkyRidge Medical Center (HCA):</strong> Feb 2017 – Aug 2018</li>
                <li class="listCircle"><strong>University of Colorado Hospital:</strong> 2008-2011; 2013-2016</li>
                <li class="listCircle"><strong>University of Washington Medical Center:</strong> 2012-2013</li>
            </ul>
            <br>
            <p class="bottom"><span class="blueHeading">Chemical Engineer</span>, Process Engineering: Emulsions and Antifoams, Dow Corning Corporation, 2001 - 2004</p>

            <p class="indent">Process Improvement/Manufacturing Support</p>
            <ul class="bottom">
                <li class="listCircle">Defect rate reduction of 127,000 ppm to 0.01 ppm in one of DCC’s highest volume emulsions.</li>
            </ul>
            <p class="indent">Six Sigma Activities</p>
            <ul class="bottom">
                <li class="listCircle">$200,000 in savings of surfactants by qualifying new sources and negotiating prices with current supplie</li>
            </ul>
            <p class="indent">Process Development</p>
            <ul class="bottom">
                <li class="listCircle">Discovered a new manufacturing process for a specific type of emulsion that resulted in a 75% reduction in processing costs and a 10 times larger batch size.</li>
            </ul>
            <p class="indent">Product Development</p>
            <ul class="bottom">
                <li class="listCircle">Led the emulsion product development efforts for a new product launch.</li>
                <li class="listCircle">Selected and optimized the formulation, processing, product clarity, and stability.</li>
            </ul>
            <p class="indent">New Product Commercialization</p>
            <ul class="bottom">
                <li class="listCircle">Succeeded in an aggressive effort to take a new emulsion from development to manufacturing in 8 weeks.</li>
                <li class="listCircle">Resulted in $400,000/yr of new product sales.</li>
            </ul>
        </div>

        <br>
        <h4>Projects</h4>
        <hr />
        <p class="bottom"><span class="blueHeading">Personal Website</span></p>
        <ul>
            <li class="listCircle">https://nelsotra.github.io/travis-tracker/</li>
        </ul>
        <p class="bottom"><span class="blueHeading">Mathematical Modeling of Neurons</span></p>
        <ul>
            <li class="listCircle"><strong>MS Physics Thesis</strong> - Built with MATLAB. Created mathematical models of neurons for a brain physics thesis.</li>
        </ul>
        <br>
        <h4>Languages</h4>
        <hr />
        <p>Experienced Python developer. Familiar with: GO, C, Java, MATLAB, C++, C#, Kotlin,
            Visual Basic, JavaScript, React, Vue JS, Clojure, SQL, Bootstrap, Kafka, Hadoop, Airflow</p>
        <br>
        <h4>Activities</h4>
        <hr />
        <p class="indentPlain"><i>Triple Crown Hiker</i> – Appalachian Trail 2005, 2016. PCT 2008. CDT 2013.</p>
        <p class="indentPlain"><i>Cross country bike touring</i> – Pacific Coast of USA. Seattle to Maine. South Korea. Japan. Iceland.</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style>
.listCircle{
    list-style-type: circle;
}

.bottom{
    margin-bottom: 0;
}

.indent{
    text-indent:10px;
    margin-bottom: 0;
    font-style: italic;
    font-weight: bold;
}

.indentPlain{
    text-indent:10px;
    margin-bottom: 0;
}

.blueHeading{
    color: blue;
    font-style: italic;
    font-weight: bold;
}

</style>
