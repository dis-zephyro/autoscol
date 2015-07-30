<!doctype html>
<html class="no-js" lang="ru">

<?php include('includes/head.php') ?>

<body>

    <!-- Header  -->
    <?php include('includes/header.php') ?>
    <!-- End of Header  -->

    <!-- Topnav -->
    <?php include('includes/topnav.php') ?>
    <!-- End of Topnav -->

    <section class="main">
        <div class="container">
            <ul class="contact" itemscope itemtype="http://schema.org/Organization">
                <li class="hidden" itemprop="name">Автоскол</li>
                <li class="address" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                    <span class="contact-title">Адрес:</span>
                    <span itemprop="addressLocality">Москва</span>,
                    <span itemprop="streetAddress">мкр. Новокосино, Салтыковская улица, 53</span>
                </li>
                <li>
                    <div id="map"></div>
                </li>
                <li class="phone">
                    <span class="contact-title">Телефон: </span>
                    <span itemprop="telephone">+7 (985) 222-21-31</span> Евгений или
                    <span itemprop="telephone">+7 (926) 169-23-13</span> Сергей
                </li>
                <li class="email">
                    <span class="contact-title">E-Mail: </span>
                    <span itemprop="email">89852222131@mail.ru</span>
                </li>
                <li class="worktime">
                    <span class="contact-title"></span>
                    <span>Ежедневно с 9:00 до 22:00</span>
                </li>
            </ul>
        </div>
    </section>

    <!-- Footer -->
    <?php include('includes/form-request.php') ?>
    <!-- End of Footer -->

    <!-- Footer -->
    <?php include('includes/footer.php') ?>
    <!-- End of Footer -->

</body>
</html>
