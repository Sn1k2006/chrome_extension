<?php
echo '<div style="text-align: center; min-height: calc(100vh - 20px); display: flex; justify-content: space-between; flex-direction: column;">';
echo '<div style="display: flex; justify-content: center; flex: 1;flex-direction: column; align-items: center;">';
echo '<img src="/assets/images/logo.png" style="width: 80px; height: auto;"/>';
echo '<h1 style="font-size: 18px;

                 line-height: 18px;
                 margin: 0;
                 margin-top: 40px;
                 color: #282828;">Dear Customer,</h1>';
echo '<h4>To coordinate the date and cost of delivery, email us information about your order:</h4>';
echo '<div>- Shipping address</div>';
echo '<div>- Link to the product you are interested in on amazon</div>';
echo '<div style="margin-top: 32px;">Our e-mail: <a href="mailto:delivery@aship.space" style="color: #F9BA68; text-decoration: underline;">delivery@aship.space</a></div>';
echo '</div>';
echo '<p style="font-size: 12px; color: #A0A0A0">URL: <b>' . $_GET['url'] . '</b>';
echo '</div>';