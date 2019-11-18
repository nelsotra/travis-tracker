<template>
    <!--
      This is the main page for the portfolio section of the site.

      It displays my resume and a selection of projects that I have worked on.
      It's setup as tabs, so each button navigates to different content.
      I thought about creating a custom component to try and simplify the content, but I'm not
      sure it would actually be helpful, so I haven't yet
    -->
    <div>
        <topHeader titleLink="/portfoliohome" titleText="Portfolio"/>

        <div class="mt-0">
            <b-card no-body>
                <b-tabs pills card>
                    <!-- Each tab contains specific content for a project -->

                    <!-- The resume is created in its own component -->
                    <b-tab title="Resume">
                        <b-card-text>
                            <resume />
                        </b-card-text>
                    </b-tab>

                    <b-tab title="Watchdog">
                        <b-card-title>The Watchdog UI</b-card-title>
                        <b-card-text>
                            Watchdog is an application created at HCA to determine how old data in a relational database is.
                            I did not create Watchdog, but one day we were discussing it and the lead developer mentioned that it would be
                            nice to have a UI for it, but that he didn't have time to create it.  Being the ambitious engineer that I
                            am, I immediately volunteered to create the UI for him.
                            <br>
                            It's not a complicated UI, but it allows users to see the current state of Watchdog, add a new table,
                            configure the settings, configure the database connections, etc.
                            <br><br>
                            The page is made with Vue JS and a Python backend, mainly because it was easy to connect to the various
                            databases with Python.
                        </b-card-text>
                        <b-container class="mt-4">
                            <b-card-img :src="publicPath + '/img/portfolio-img/watchdog.png'"></b-card-img>
                        </b-container>
                    </b-tab>

                    <b-tab title="Hadoop">
                        <b-card-title>Hadoop Healthchecks UI</b-card-title>
                        <b-card-text>
                            Part of my job involves operational work; in this case I was tasked with creating some Healthchecks to
                            determine the state of HCA's Hadoop system and the components of it (like Hbase, Hive, Impala, Spark).
                            The healthchecks were written in a variety of languages, but mostly Python and Kotlin.  Once finished, they
                            were out there and running, but it wasn't easy to see their current state, so I created a system to display
                            the current status of these processes.  The idea was that you would give it a schedule and the healthcheck
                            would ping an API endpoint to let it know that it was successful.  If a ping was not received, or an error was
                            received, that would be displayed as a failure.  It's fairly similar to Cronitor, if you are familiar with
                            that service.
                            <br><br>
                            The UI was created with React, and the backend is Go
                        </b-card-text>
                        <b-container class="mt-4">
                            <b-card-img :src="publicPath + '/img/portfolio-img/healthchecks.png'"></b-card-img>
                        </b-container>
                    </b-tab>

                    <b-tab title="Airflow">
                        <b-card-title>RCPS and Airflow</b-card-title>
                        <b-card-text>
                            RCPS is a data science product within HCA.  The details of what RCPS does and is
                            used for are not relevant here, but the important thing is that it was initially
                            setup to run on a cron-job on a server.  That's fine, it worked, but people didn't
                            have a lot of visibility into what was happening with it.  To solve that problem, and
                            to make it a little easier to instrument and monitor, I moved it over to Airflow.  Now,
                            people can go to Airflow's UI Dashboard and see if the latest run worked, read the logs,
                            kick off a manual run, etc.  It's much more user friendly, especially when combined with
                            CI/CD for the SQL scripts and the scripts running the Airflow tasks.  Plus, each task in Airflow
                            can be fitted with its own alerting, so we know exactly where a problem is happening.
                        </b-card-text>
                        <b-container class="mt-4">
                            <b-card-img :src="publicPath + '/img/portfolio-img/airflow_rcps.png'"></b-card-img>
                        </b-container>
                    </b-tab>

                    <b-tab title="Data Monitor">
                        <b-card-title>Nate Data Monitor</b-card-title>
                        <b-card-text>
                            Nate is an internal HCA application that is used directly in HCA hospitals.
                            I did not create Nate, but they were having an issue with some of their data feeds
                            not being current, so I volunteered my Airflow skills to create some scripts that
                            would check their data sources and send alerts if the data in them was older than a
                            pre-determined value.  The alerts were configured to go to a Webex Teams channel, which
                            I hadn't done before, but turned out to be a fantastic solution, because then the entire
                            team can see the failure alert and comment about possible solutions.  So much easier than emails
                            or PagerDuty.
                            <br><br>
                            The scripts in Airflow are Python
                        </b-card-text>
                        <b-container class="mt-4">
                            <b-card-img :src="publicPath + '/img/portfolio-img/airflow_nate.png'"></b-card-img>
                        </b-container>
                    </b-tab>

                    <b-tab title="Call Helper">
                        <b-card-title>Critical Call Helper</b-card-title>
                        <b-card-text>
                            This one was just a fun side-project for myself.  If you looked at my resume, you saw that I
                            have extensive experience working in hospital labs as a medical technologist.  Well, now that
                            I'm a developer, I decided to create an application that I *wish* I had when I was working
                            in a lab.
                            <br>
                            Here's the short summary:  In a lab, there are a lot of critical values that MUST be
                            called to the nurse or doctor taking care of a patient (like a critically low glucose
                            value, something like that).  The problem is that sometimes you can get 10 of these things at the
                            same time.  It's not really possible to call 10 nurses at the same time, so you call one and the
                            other 9 sit there and wait.  My idea was to create an application so that you can log those calls,
                            they show up in a list, and anyone in that lab can help out by grabbing one of those items and making
                            the call for you.  So the tech would create a new call item, it shows up under 'Available', then
                            someone else would click on it to bring it over to the 'InProgress' side, and then when the call
                            is complete you click on a button to send it to the 'Done' list.
                            <br><br>
                            The front end is Vue JS and the backend is Go.
                        </b-card-text>
                        <b-container class="mt-4">
                            <b-card-img :src="publicPath + '/img/portfolio-img/callhelper.png'"></b-card-img>
                        </b-container>
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>

        <bttmFooter footerLink="/portfoliohome" footerText="Portfolio" />
    </div>
</template>

<script>
import topHeader from './header'
import bttmFooter from './footer'
import resume from './resume'

export default {
  name: 'PortfolioHome',
  components: {
    topHeader,
    bttmFooter,
    resume
  },
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
