// src/components/Articles.jsx
import React from "react";
import "./Articles.css";

import weakPasswords from "../assets/img/weak_passwords.png";
import bruteForce from "../assets/img/brute_force.png";
import strongPasswords from "../assets/img/strong_passwords.png";
import passwordExamples from "../assets/img/password_examples.png";
import comparisonImage from '../assets/img/password_check.png';


const Articles = () => {
  return (
    <section className="articles-section">
      <h2>Why Strong Passwords Matter</h2>
      <img
        src={weakPasswords}
        alt="Weak passwords issue"
        className="article-image"
      />
      <p>
        Many cyber attacks succeed today because users still rely on weak,
        easily guessable passwords. Common choices like birthdays, pet names, or
        "123456" make accounts vulnerable to brute-force attacks. These types of
        attacks try thousands of combinations rapidly — and simple passwords are
        cracked in seconds.
      </p>

      <h3>The Problem with Weak Passwords</h3>
      <img
        src={bruteForce}
        alt="Brute force attack illustration"
        className="article-image"
      />
      <ul>
        <li>Using names, dates, or common words makes guessing easier.</li>
        <li>Hackers use automated tools to try millions of combinations.</li>
        <li>Weak passwords can compromise emails, bank accounts, and more.</li>
      </ul>

      <h3>How to Create a Strong Password</h3>
      <img
        src={strongPasswords}
        alt="Tips for strong passwords"
        className="article-image"
      />
      <ul>
        <li>Use at least 12 characters.</li>
        <li>Include uppercase, lowercase, numbers, and symbols.</li>
        <li>Avoid dictionary words or personal information.</li>
        <li>Use a passphrase or a password manager for safety.</li>
      </ul>

      <h3>Examples of Strong Passwords</h3>
      <img
        src={passwordExamples}
        alt="Password examples"
        className="article-image"
      />
      <ul>
        <li>
          <code>G!8r@T#q9Lz*W1</code>
        </li>
        <li>
          <code>MyD0gAte$2Shoes!</code>
        </li>
        <li>
          <code>RainyDay@2025!</code>
        </li>
      </ul>

      <h3>Compare Your Password with Commonly Used Passwords</h3>
      <img
        src={comparisonImage}
        alt="Common passwords comparison"
        className="article-image"
      />
      <p>
        Attackers often use massive lists of leaked or commonly used passwords
        when performing brute-force attacks. These lists include simple and
        widely used passwords like <code>123456</code>, <code>password</code>,
        or <code>admin</code>. If your password appears on such a list, it's
        extremely unsafe — even if it feels personal or unique.
      </p>

      <p>
        Our tool includes a feature that checks your password against a set of
        these commonly used passwords. This helps you avoid passwords that are
        easily guessed or frequently targeted by attackers.
      </p>

      <p>
        If your password is found on the list, we strongly recommend changing it
        immediately. Strong, unique passwords keep you safer against automated
        attacks and credential stuffing.
      </p>

      <p>
        Remember, your password is the first line of defense. Make it strong,
        and change it regularly!
      </p>
    </section>
  );
};

export default Articles;
