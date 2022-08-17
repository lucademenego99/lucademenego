<!-- Tab showing my study experiences -->

<script lang="ts">
    import DropdownStudy from "./DropdownStudy.svelte";
</script>

<div class="tab" data-aos="fade-up" data-aos-delay="400">
    <h3>Studies.</h3>

    <DropdownStudy tabTitle="Bachelor @ University of Trento (TN)">
        <p><strong>Department of information engineering and computer science</strong></p>
        <p><strong>Course: Computer Science Bachelor</strong></p>
        <p><strong>Sep 2018 - Jul 2021</strong></p>
        <p><strong>Grade: 110 cum laude</strong></p>
        <p>
            These three years have given me an overall knowledge of the most
            important aspects of computer science, together with a preparation
            on mathematics, physics and statistics.
        </p>
        <p>
            I have been introduced to how computers and operating systems work
            and to different fields, such as computer and network security,
            human-computer interaction and machine learning. More focus has been
            put to algorithms, data structures, software engineering and
            databases.
        </p>
    </DropdownStudy>

    <DropdownStudy tabTitle="Master @ University of Trento (TN)">
        <p><strong>Department of information engineering and computer science</strong></p>
        <p><strong>Course: Computer Science Master</strong></p>
        <p><strong>Sep 2021 - ???</strong></p>
        <p><strong>Grade: ???</strong></p>
        <p>
            The master allowed me to go deeper into the aspects of computer
            science I personally found more interesting, namely Machine/Deep
            Learning, Service design and engineering and Network Security.
        </p>
        <p>
            It gave me a better understanding on how complex architectures can
            scale up, even in a cloud computing and distributed setting, by also
            presenting technologies like LXCs, Docker and K8s. Finally,
            computability and computational complexity have been described in
            more detail, with a great focus on NP-complete problems.
        </p>
        <p>
            Thanks to various projects and courses, I have also gained some
            experience in web architectures.
        </p>
    </DropdownStudy>
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
