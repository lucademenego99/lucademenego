<!-- Tab showing my work experiences -->
<script lang="ts">
    import DropdownWork from "../components/DropdownWork.svelte";
</script>

<div class="tab" data-aos="fade-up" data-aos-delay="350">
    <h3>Work.</h3>
    <DropdownWork tabTitle="Internship @ SpazioDati (TN)">
        <p><strong>Feb 2021 - Jun 2021</strong></p>
        <p>
            Developed a notification centre based on gRPC and Protocol Buffers,
            which was used to send notifications to users while exploiting
            Firebase Cloud Messaging and a serverless architecture. AWS DynamoDB
            has been the chosen backend database.
        </p>
        <p>
            Software monitoring has been integrated via OpenTelemetry, based on:
        </p>
        <ul>
            <li>logs - exported in sentry</li>
            <li>metrics - exported in Prometheus</li>
            <li>distributed tracing - exported in AWS X-Ray</li>
        </ul>
        <p>Incorporated it in the production site based on Django and React.</p>
    </DropdownWork>

    <DropdownWork tabTitle="Developer @ Thema Optical (BL)">
        <p><strong>Jul 2022 - Present</strong></p>
        <p>At Thema I am mostly working on the development of:</p>
        <ul>
            <li>Flutter applications for iOS and Android</li>
            <li>web applications, in Vue.js and Yii2</li>
        </ul>
        <p>
            In both cases, an important aspect is virtual reality and 3D: I have
            been working quite a lot with ARKit, ARCore and Three.js.
        </p>
        <p>
            Regarding the backend, it is primarily based on C#, which is also
            used to develop SAP add-ons and Windows Forms. The databases used
            are MySQL and SAP HANA.
        </p>
        <p>
            During these years I also gained some experience in the Google Cloud
            Platform and its main components.
        </p>
    </DropdownWork>

    <DropdownWork tabTitle="IT Head @ Thema Optical (BL)">
        <p><strong>Jul 2020 - Jul 2023</strong></p>
        <p>
            Upon my promotion, I assumed leadership of a dynamic team of
            developers and IT experts, offering guidance, mentorship, and
            strategic oversight to ensure project execution.
        </p>
        <p>
            Together with my team, I continued working on web and mobile
            applications, as in the previous role's description.
        </p>
        <p>In addition, I am:</p>
        <ul>
            <li>
                managing and driving the optimization of SAP B1 infrastructure,
                enhancing business operations and guaranteeing system
                reliability and performance;
            </li>
            <li>
                developing .NET applications interfacing with SAP B1 for
                seamless data integration and workflow automation.
            </li>
        </ul>
    </DropdownWork>
</div>

<style>
    .tab {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    .tab h3 {
        font-family: "Jockey-One";
        font-weight: 100;
        color: white;
        letter-spacing: 1px;
        font-size: 26px;
        margin: 0;
        padding: 0 0 0.8rem 0;
    }
</style>
